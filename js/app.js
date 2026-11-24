/**
 * CHING ARCHITECTURAL HUB - MASTER APPLICATION CONTROLLER
 * Architecture: Form, Space, and Order by Francis D.K. Ching
 */

class ArchApp {
  constructor() {
    this.currentModuleId = 'm1';
    this.currentSectionId = 'm1_s1';
    this.currentTab = 'player'; // 'player' | '3d' | 'glossary' | 'quiz'
    this.currentTheme = localStorage.getItem('arch_theme') || 'blueprint';
    this.currentLang = localStorage.getItem('arch_lang') || 'ar'; // 'ar' | 'en'
    this.activeSearch = '';
    this.activeGlossaryFilter = 'all';

    this.rufflePlayer = null;
    this.loadToken = 0;     // identifies the latest section load, so a quick switch cannot start a stale Ruffle player
    this.loadTimer = null;
    this.studio3D = null;

    this.init();
  }

  init() {
    // 1. Apply saved Theme & Language
    this.setTheme(this.currentTheme);
    this.setLanguage(this.currentLang);

    // 2. Render Sidebar Navigation
    this.renderSidebar();

    // 3. Render Glossary
    this.renderGlossary();

    // 4. Render Quiz for current module
    this.renderQuiz();

    // 5. Initialize Events (Search, Tabs, Controls)
    this.bindEvents();

    // 6. Initialize Ruffle Player with initial section
    this.loadSection(this.currentSectionId);
  }

  // ==========================================
  // THEME & LANGUAGE MANAGEMENT
  // ==========================================
  setTheme(themeName) {
    this.currentTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('arch_theme', themeName);

    // Update Theme Toggle Buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === themeName);
    });
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('arch_lang', lang);
    // direction and language on <html> as well, so screen readers and the layout follow the switch
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Lang Toggle Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update dynamic text
    this.updateLanguageUI();
    this.renderSidebar();
    this.updateCurrentSectionInfo();
    this.renderGlossary();
    this.renderQuiz();
  }

  updateLanguageUI() {
    const isAr = this.currentLang === 'ar';
    document.querySelectorAll('[data-i18n-ar]').forEach(el => {
      el.textContent = isAr ? el.getAttribute('data-i18n-ar') : el.getAttribute('data-i18n-en');
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.placeholder = isAr 
        ? 'ابحث في العروض، الفصول، والمصطلحات المعمارية...' 
        : 'Search modules, chapters, and architectural terms...';
    }
  }

  // ==========================================
  // SIDEBAR RENDERING & SEARCH
  // ==========================================
  renderSidebar() {
    const container = document.getElementById('modules-nav-list');
    if (!container) return;

    container.innerHTML = '';
    const isAr = this.currentLang === 'ar';
    const query = this.activeSearch.toLowerCase().trim();

    ARCH_MODULES.forEach(module => {
      // Check if module or any section matches search query
      const moduleMatch = module.titleAr.toLowerCase().includes(query) ||
                          module.titleEn.toLowerCase().includes(query) ||
                          module.conceptAr.toLowerCase().includes(query) ||
                          module.conceptEn.toLowerCase().includes(query);

      const matchingSections = module.sections.filter(sec => {
        if (!query) return true;
        return sec.titleAr.toLowerCase().includes(query) ||
               sec.titleEn.toLowerCase().includes(query) ||
               sec.descAr.toLowerCase().includes(query) ||
               sec.descEn.toLowerCase().includes(query) ||
               sec.keyConcepts.some(c => c.toLowerCase().includes(query));
      });

      if (query && !moduleMatch && matchingSections.length === 0) {
        return; // skip if doesn't match search
      }

      const card = document.createElement('div');
      card.className = `module-card ${module.id === this.currentModuleId || query ? 'expanded' : ''}`;
      card.id = `mod-card-${module.id}`;

      card.innerHTML = `
        <div class="module-header" data-mod-id="${module.id}">
          <div class="module-meta">
            <span class="module-number">${module.number}</span>
            <div class="module-names">
              <span class="mod-title-ar">${isAr ? module.titleAr : module.titleEn}</span>
              <span class="mod-title-en">${isAr ? module.titleEn : module.titleAr}</span>
            </div>
          </div>
          <span class="module-arrow">▼</span>
        </div>
        <div class="sections-list" id="sec-list-${module.id}">
          ${(query ? matchingSections : module.sections).map(sec => `
            <div class="section-item ${sec.id === this.currentSectionId ? 'active' : ''}" 
                 data-sec-id="${sec.id}" data-mod-id="${module.id}">
              <span>${isAr ? sec.titleAr : sec.titleEn}</span>
              <span class="section-number">${sec.id.replace('_', '.').toUpperCase()}</span>
            </div>
          `).join('')}
        </div>
      `;

      container.appendChild(card);
    });

    // Add click listeners to module headers and section items
    container.querySelectorAll('.module-header').forEach(hdr => {
      hdr.addEventListener('click', () => {
        const modCard = hdr.closest('.module-card');
        modCard.classList.toggle('expanded');
      });
    });

    container.querySelectorAll('.section-item').forEach(item => {
      item.addEventListener('click', () => {
        const secId = item.dataset.secId;
        const modId = item.dataset.modId;
        this.selectSection(modId, secId);
      });
    });
  }

  // ==========================================
  // SECTION & RUFFLE PLAYER LOGIC
  // ==========================================
  selectSection(modId, secId) {
    this.currentModuleId = modId;
    this.currentSectionId = secId;

    // Update active highlight in sidebar
    document.querySelectorAll('.section-item').forEach(el => {
      el.classList.toggle('active', el.dataset.secId === secId);
    });

    // Update info card
    this.updateCurrentSectionInfo();

    // Load in Ruffle player
    this.loadSection(secId);

    // Update Quiz for this module if user switches tab
    this.renderQuiz();

    // If on mobile, scroll smoothly to player
    if (window.innerWidth < 1000) {
      document.getElementById('player-viewport-container')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getCurrentSectionData() {
    for (const mod of ARCH_MODULES) {
      const sec = mod.sections.find(s => s.id === this.currentSectionId);
      if (sec) return { module: mod, section: sec };
    }
    return { module: ARCH_MODULES[0], section: ARCH_MODULES[0].sections[0] };
  }

  updateCurrentSectionInfo() {
    const { module, section } = this.getCurrentSectionData();
    const isAr = this.currentLang === 'ar';

    const titleEl = document.getElementById('active-section-title');
    const subEl = document.getElementById('active-section-subtitle');
    const descEl = document.getElementById('concept-description-text');
    const tagsContainer = document.getElementById('concept-key-tags');

    if (titleEl) titleEl.textContent = `${module.number}.${section.id.split('_')[1].toUpperCase()} : ${isAr ? section.titleAr : section.titleEn}`;
    if (subEl) subEl.textContent = isAr ? `${module.titleAr} | ${section.titleEn}` : `${module.titleEn} | ${section.titleAr}`;
    if (descEl) descEl.textContent = isAr ? section.descAr : section.descEn;

    if (tagsContainer) {
      tagsContainer.innerHTML = section.keyConcepts.map(k => `
        <span class="concept-tag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          ${k}
        </span>
      `).join('');
    }
  }

  loadSection(secId) {
    const { section } = this.getCurrentSectionData();
    const slot = document.getElementById('ruffle-player-slot');
    if (!slot) return;

    // A newer load supersedes any pending one; the previous Ruffle player is removed (destroyed) before a new one starts
    const token = ++this.loadToken;
    clearTimeout(this.loadTimer);
    if (this.rufflePlayer) {
      try { this.rufflePlayer.remove(); } catch (e) { /* already gone */ }
      this.rufflePlayer = null;
    }

    // Show loading state
    slot.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#00d2ff;font-family:var(--font-mono);gap:12px;">
        <div style="width:36px;height:36px;border:3px solid rgba(0,210,255,0.3);border-top-color:#00d2ff;border-radius:50%;animation:spin 1s linear infinite;"></div>
        <span>${this.currentLang === 'ar' ? 'جاري تحميل العرض التفاعلي والمعماري...' : 'Loading Interactive Ching Presentation...'}</span>
      </div>
    `;

    // Ensure Ruffle Player is ready
    const initPlayer = () => {
      if (token !== this.loadToken) return; // superseded by a newer section
      try {
        if (!window.RufflePlayer) {
          console.warn('RufflePlayer not found, retrying...');
          this.loadTimer = setTimeout(initPlayer, 200);
          return;
        }

        const ruffle = window.RufflePlayer.newest();
        this.rufflePlayer = ruffle.createPlayer();
        this.rufflePlayer.style.width = '100%';
        this.rufflePlayer.style.height = '100%';

        slot.innerHTML = '';
        slot.appendChild(this.rufflePlayer);

        // Configure player params
        this.rufflePlayer.config = {
          autoplay: 'on',
          unmuteOverlay: 'hidden',
          letterbox: 'on',
          warnOnUnsupportedContent: false,
          scale: 'showAll',
          forceScale: true,
          quality: 'high'
        };

        // Load target SWF
        const player = this.rufflePlayer;
        player.load(section.swf).then(() => {
          console.log(`Successfully loaded ${section.swf}`);
        }).catch(err => {
          if (token !== this.loadToken) return; // the user already moved to another section
          console.error('Error loading SWF:', err);
          slot.innerHTML = `
            <div style="padding:20px;text-align:center;color:#f87171;font-family:var(--font-mono);">
              <p>تعذر تشغيل العرض عبر Ruffle محلياً بدون خادم ويب (CORS policy).</p>
              <p style="font-size:0.8rem;margin-top:8px;color:#94a3b8;">يرجى تشغيل خادم محلي مثل: <code>python -m http.server</code> أو رفعه على GitHub Pages.</p>
            </div>
          `;
        });
      } catch (e) {
        console.error('Ruffle init error:', e);
      }
    };

    this.loadTimer = setTimeout(initPlayer, 50);
  }

  // ==========================================
  // ARCHITECTURAL GLOSSARY
  // ==========================================
  renderGlossary() {
    const grid = document.getElementById('glossary-terms-grid');
    if (!grid) return;

    const isAr = this.currentLang === 'ar';
    const query = this.activeSearch.toLowerCase().trim();

    const filtered = ARCH_GLOSSARY.filter(t => {
      const modMatch = this.activeGlossaryFilter === 'all' || t.module === this.activeGlossaryFilter;
      if (!modMatch) return false;
      if (!query) return true;
      return t.termAr.toLowerCase().includes(query) ||
             t.termEn.toLowerCase().includes(query) ||
             t.defAr.toLowerCase().includes(query) ||
             t.defEn.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding: 40px; color: var(--text-muted); font-family: var(--font-mono);">
          ${isAr ? 'لم يتم العثور على مصطلحات مطابقة للبحث' : 'No matching architectural terms found'}
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(t => `
      <div class="term-card">
        <div class="term-header">
          <span class="term-ar">${isAr ? t.termAr : t.termEn}</span>
          <span class="term-en">${isAr ? t.termEn : t.termAr}</span>
        </div>
        <p class="term-def">${isAr ? t.defAr : t.defEn}</p>
        <span class="concept-tag" style="align-self: flex-start; margin-top: auto;">
          الفصل ${t.module.replace('m', '0')}
        </span>
      </div>
    `).join('');
  }

  // ==========================================
  // ARCHITECTURAL QUIZZES
  // ==========================================
  renderQuiz() {
    const container = document.getElementById('quiz-content-container');
    if (!container) return;

    const isAr = this.currentLang === 'ar';
    const quiz = ARCH_QUIZZES[this.currentModuleId] || ARCH_QUIZZES['m1'];

    container.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border-color);padding-bottom:12px;">
        <h3 style="color:var(--accent-cyan);font-family:var(--font-mono);">${isAr ? quiz.titleAr : quiz.titleEn}</h3>
        <span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--accent-gold);">
          ${quiz.questions.length} ${isAr ? 'أسئلة تفاعلية' : 'Questions'}
        </span>
      </div>
      <div style="display:flex;flex-direction:column;gap:18px;">
        ${quiz.questions.map((q, qIdx) => `
          <div class="quiz-question-box" data-q-idx="${qIdx}">
            <div class="quiz-question-text">
              <span style="color:var(--accent-cyan);font-family:var(--font-mono);margin-inline-end:8px;">Q${qIdx + 1}.</span>
              ${isAr ? q.questionAr : q.questionEn}
            </div>
            <div class="quiz-options">
              ${(isAr ? q.optionsAr : q.optionsEn).map((opt, oIdx) => `
                <button class="quiz-opt-btn" data-q-idx="${qIdx}" data-opt-idx="${oIdx}">
                  <span>${opt}</span>
                  <span class="opt-indicator">○</span>
                </button>
              `).join('')}
            </div>
            <div class="quiz-feedback" id="quiz-feedback-${qIdx}">
              <strong>${isAr ? 'التفسير المعماري:' : 'Architectural Explanation:'}</strong>
              <p style="margin-top:4px;">${isAr ? q.explanationAr : q.explanationEn}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Bind Quiz Option clicks
    container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.dataset.qIdx, 10);
        const optIdx = parseInt(btn.dataset.optIdx, 10);
        this.handleQuizAnswer(quiz, qIdx, optIdx);
      });
    });
  }

  handleQuizAnswer(quiz, qIdx, selectedIdx) {
    const q = quiz.questions[qIdx];
    const qBox = document.querySelector(`.quiz-question-box[data-q-idx="${qIdx}"]`);
    const feedbackEl = document.getElementById(`quiz-feedback-${qIdx}`);
    if (!qBox || !feedbackEl) return;

    const buttons = qBox.querySelectorAll('.quiz-opt-btn');
    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correctIndex) {
        b.classList.add('correct');
        b.querySelector('.opt-indicator').textContent = '✓';
      } else if (idx === selectedIdx) {
        b.classList.add('wrong');
        b.querySelector('.opt-indicator').textContent = '✗';
      }
    });

    feedbackEl.classList.add('show');
    if (selectedIdx === q.correctIndex) {
      feedbackEl.classList.add('success');
    } else {
      feedbackEl.classList.add('error');
    }
  }

  // ==========================================
  // EVENT BINDINGS
  // ==========================================
  bindEvents() {
    // 1. Tab Switching
    document.querySelectorAll('.view-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        this.switchTab(targetTab);
      });
    });

    // 2. Theme Buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setTheme(btn.dataset.theme);
      });
    });

    // 3. Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setLanguage(btn.dataset.lang);
      });
    });

    // 4. Global Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.activeSearch = e.target.value;
        this.renderSidebar();
        this.renderGlossary();
      });
    }

    // 5. Fullscreen Player
    const fsBtn = document.getElementById('btn-fullscreen');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        const target = document.getElementById('player-viewport-container');
        if (!target) return;
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          target.requestFullscreen().catch(err => console.log(err));
        }
      });
    }

    // 6. Reload Current Section
    const reloadBtn = document.getElementById('btn-reload-player');
    if (reloadBtn) {
      reloadBtn.addEventListener('click', () => {
        this.loadSection(this.currentSectionId);
      });
    }

    // 7. Glossary Filter Buttons
    document.querySelectorAll('.glossary-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.glossary-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeGlossaryFilter = btn.dataset.filter;
        this.renderGlossary();
      });
    });

    // 8. 3D Studio Concept Buttons
    document.querySelectorAll('.btn-concept').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-concept').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const concept = btn.dataset.concept;
        if (this.studio3D) {
          this.studio3D.loadConcept(concept);
        }
      });
    });

    // 9. 3D Studio Render Mode
    document.querySelectorAll('.btn-render-mode').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-render-mode').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (this.studio3D) {
          this.studio3D.setRenderMode(btn.dataset.mode);
          // reload active concept
          const activeConceptBtn = document.querySelector('.btn-concept.active');
          this.studio3D.loadConcept(activeConceptBtn ? activeConceptBtn.dataset.concept : 'volume');
        }
      });
    });
  }

  switchTab(tabName) {
    this.currentTab = tabName;

    // Update Tab UI
    document.querySelectorAll('.view-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tabName);
    });

    // Toggle Tab Views
    document.querySelectorAll('.tab-view-section').forEach(view => {
      view.style.display = view.id === `tab-view-${tabName}` ? 'block' : 'none';
    });

    // If switching to 3D tab, ensure Three.js is initialized and resized
    if (tabName === '3d') {
      if (!this.studio3D && window.Arch3DStudio) {
        this.studio3D = new window.Arch3DStudio('canvas3d-container');
      } else if (this.studio3D) {
        setTimeout(() => this.studio3D.onResize(), 50);
      }
    }
  }
}

// Auto-boot on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.archApp = new ArchApp();
});
