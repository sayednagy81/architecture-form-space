/**
 * CHING ARCHITECTURAL HUB - MODULES DATA
 * Based on "Architecture: Form, Space, and Order" by Francis D.K. Ching (Third Edition)
 * Comprehensive mapping of the 7 modules & 25 interactive presentations
 */

const ARCH_MODULES = [
  {
    id: "m1",
    number: "01",
    titleAr: "العناصر الأساسية",
    titleEn: "Primary Elements",
    conceptAr: "من النقطة إلى الحجم: الأبجدية الهندسية للتكوين المعماري",
    conceptEn: "From Point to Volume: The geometric alphabet of architectural composition",
    icon: "lucide-box",
    color: "#00d2ff",
    sections: [
      {
        id: "m1_s1",
        swf: "swfs/m1_s1.swf",
        titleAr: "النقطة وتأثير نقطتين",
        titleEn: "The Point & Two Points",
        descAr: "النقطة كعنصر أحادي يشير إلى موقع في الفراغ بدون طول أو عرض أو عمق. استقرار النقطة المركزية، وتوليد محور توجيهي غير مرئي عند وجود نقطتين.",
        descEn: "The point marks a position in space with zero dimensions. Central stability, visual field focus, and how two points generate an implied linear axis.",
        keyConcepts: ["نقطة التمركز (Center)", "المحور الضمني (Implied Axis)", "التوتر البصري (Visual Tension)"]
      },
      {
        id: "m1_s2",
        swf: "swfs/m1_s2.swf",
        titleAr: "الخط والعناصر الخطية",
        titleEn: "The Line & Linear Elements",
        descAr: "امتداد النقطة يولد الخط. الخط يمتلك طولاً واتجاهاً ومساراً. استخدام الأعمدة والمباني الخطية لتحديد الحواف والممرات وتوجيه الحركة البصرية.",
        descEn: "Extending a point creates a line. A line possesses length, direction, and growth. Columns, colonnades, and linear edifices define edges and guide visual movement.",
        keyConcepts: ["عنصر خطي (Linear Element)", "العمود كخط رأسي (Vertical Column)", "الحافة والمسار (Edge & Path)"]
      },
      {
        id: "m1_s3",
        swf: "swfs/m1_s3.swf",
        titleAr: "المستوى والعناصر المستوية",
        titleEn: "The Plane & Planar Elements",
        descAr: "امتداد الخط يولد المستوى، ممتلكاً طولاً وعرضاً وسطحاً وشكلاً. دراسة مستويات الأرضية، ومستويات الجدران الرأسية، ومستوى السقف المغطي.",
        descEn: "Extending a line produces a plane with length, width, surface, and orientation. Analysis of base planes, vertical wall planes, and overhead planes.",
        keyConcepts: ["مستوى القاعدة (Base Plane)", "مستوى الجدار الرأسي (Wall Plane)", "مستوى السقف (Overhead Plane)"]
      },
      {
        id: "m1_s4",
        swf: "swfs/m1_s4.swf",
        titleAr: "الحجم والكتلة الفراغية",
        titleEn: "Volume & Volumetric Elements",
        descAr: "امتداد المستوى في البعد الثالث يولد الحجم (الكتلة والفراغ). إدراك الحجم ككتلة صلبة تشغل حيزاً أو كفراغ محصور ومحدد بمستويات.",
        descEn: "Extending a plane into the third dimension creates a volume. Volume seen as a solid mass occupying space or as a void defined and bounded by planes.",
        keyConcepts: ["المصمت والمفرغ (Solid & Void)", "الفضاء المحصور (Enclosed Space)", "الكتلة البصرية (Mass & Space)"]
      },
      {
        id: "m1_s5",
        swf: "swfs/m1_s5.swf",
        titleAr: "الأشكال الأساسية والتحول",
        titleEn: "Primary Shapes & Transformation",
        descAr: "الأشكال الهندسية الأولية: الدائرة (المركزية والكمال)، المثلث (الاستقرار والديناميكية)، والمربع (النقاء والاتزان)، وتحولاتها ثنائية وثلاثية الأبعاد.",
        descEn: "The primary geometric shapes: Circle (centralized unity), Triangle (stability and dynamic thrust), Square (purity and equilibrium), and their 3D forms.",
        keyConcepts: ["الدائرة والأسطوانة والكرة", "المثلث والهرم والمخروط", "المربع والمكعب"]
      }
    ]
  },
  {
    id: "m2",
    number: "02",
    titleAr: "الشكل والتشكيل",
    titleEn: "Form",
    conceptAr: "الخصائص البصرية، والانتظام، وتحولات التشكيل المعماري",
    conceptEn: "Visual properties, regularity, and transformations of architectural mass",
    icon: "lucide-shapes",
    color: "#3a86ff",
    sections: [
      {
        id: "m2_s1",
        swf: "swfs/m2_s1.swf",
        titleAr: "الخصائص البصرية للشكل",
        titleEn: "Visual Properties of Form",
        descAr: "تحليل العناصر المحددة للشكل: الحجم والمقياس، اللون ودرجة انعكاس الضوء، الملمس السطحي، الموضع بالنسبة للمراقب، التوجيه الجغرافي، والقصور البصري.",
        descEn: "Analysis of form properties: shape, dimensions/scale, color/light reflectance, surface texture, position, orientation, and visual inertia.",
        keyConcepts: ["القصور البصري (Visual Inertia)", "الملمس واللون (Texture & Color)", "التوجيه والموضع (Orientation & Position)"]
      },
      {
        id: "m2_s2",
        swf: "swfs/m2_s2.swf",
        titleAr: "الأشكال المنتظمة وغير المنتظمة",
        titleEn: "Regular & Irregular Forms",
        descAr: "التناسق الهندسي والتوازن في الأشكال المنتظمة، مقابل الحيوية والديناميكية والمرونة في الأشكال غير المنتظمة المستجيبة للموقع والوظيفة.",
        descEn: "Geometric consistency and balance in regular forms vs. dynamism, asymmetry, and contextual flexibility in irregular forms.",
        keyConcepts: ["الشكل المنتظم (Regular Form)", "الشكل اللامنظم (Irregular Form)", "التوازن البصري (Visual Equilibrium)"]
      },
      {
        id: "m2_s3",
        swf: "swfs/m2_s3.swf",
        titleAr: "التحول البعدي والطرحي",
        titleEn: "Dimensional & Subtractive Transformation",
        descAr: "تعديل أبعاد الشكل بالتمدد أو الضغط، والتشكيل بطرح كتل جزئية من الحجم الأصلي لخلق فراغات ومداخل وظلال دون فقدان الهوية الهندسية الأساسية.",
        descEn: "Altering dimensions by stretching/compression, and subtractive transformation where volumes are carved out to create recesses, entrances, and light wells.",
        keyConcepts: ["التحول البعدي (Dimensional Transformation)", "الشكل الطرحي (Subtractive Form)", "فراغ المدخل والظل (Recess & Shadow)"]
      },
      {
        id: "m2_s4",
        swf: "swfs/m2_s4.swf",
        titleAr: "الأشكال الإضافية وتصادم الكتل",
        titleEn: "Additive Forms & Formal Collisions",
        descAr: "بناء التكوين المعماري بإضافة كتل متجاورة، أو متداخلة، أو موصولة بوجه مشترك. دراسة تلاقي الأشكال الهندسية المختلفة وتصادمها البصري.",
        descEn: "Assembling architectural compositions by adding volumes (edge-to-edge, face-to-face, interlocking). Visual collision of contrasting geometries.",
        keyConcepts: ["التشكيل الإضافي (Additive Form)", "تداخل الكتل (Interlocking Volumes)", "تصادم الهندسات (Formal Collision)"]
      }
    ]
  },
  {
    id: "m3",
    number: "03",
    titleAr: "الشكل والفضاء",
    titleEn: "Form & Space",
    conceptAr: "وحدة المتضادات وتحديد الفضاء بالعناصر الأفقية والرأسية والفتحات",
    conceptEn: "Unity of opposites: Defining space via horizontal, vertical elements and openings",
    icon: "lucide-layout-grid",
    color: "#8338ec",
    sections: [
      {
        id: "m3_s1",
        swf: "swfs/m3_s1.swf",
        titleAr: "وحدة المتضادات: المصمت والمفرغ",
        titleEn: "Unity of Opposites: Solid & Void",
        descAr: "العلاقة التبادلية بين الشكل المصمت والفضاء المحيط. الفضاء المعماري ليس فراغاً سلبياً، بل كيان موجب يشكله ويحدده الغلاف المعماري.",
        descEn: "The dialectic symbiosis of solid and void. Architectural space is not passive emptiness, but a positive entity shaped and sculpted by surrounding masses.",
        keyConcepts: ["الموجب والسالب (Figure-Ground)", "الفضاء ككيان إيجابي (Positive Space)", "النسيج الحضري (Urban Fabric)"]
      },
      {
        id: "m3_s2",
        swf: "swfs/m3_s2.swf",
        titleAr: "تحديد الفضاء بالعناصر الأفقية",
        titleEn: "Defining Space with Horizontal Elements",
        descAr: "كيف تحدد المستويات الأفقية الفضاء: مستوى القاعدة المستوي، مستوى القاعدة المرفوع (المنصة)، مستوى القاعدة المنخفض (الغائر)، ومستوى السقف المظلي.",
        descEn: "How horizontal planes define spatial boundaries: Base plane, Elevated base plane (platform), Depressed base plane, and Overhead sheltering plane.",
        keyConcepts: ["المنصة المرفوعة (Elevated Plane)", "الفضاء الغائر (Depressed Plane)", "مظلة السقف (Overhead Canopy)"]
      },
      {
        id: "m3_s3",
        swf: "swfs/m3_s3.swf",
        titleAr: "تحديد الفضاء بالعناصر الرأسية",
        titleEn: "Defining Space with Vertical Elements",
        descAr: "العناصر الرأسية المغلقة والمفتوحة: الأعمدة كعناصر خطية، الجدار المنفرد، المستويات على شكل حرف L، المستويات المتوازية، المستويات على شكل U، والاحتواء الرباعي التام.",
        descEn: "Vertical spatial definers: Linear column rows, single wall planes, L-shaped configurations, parallel planes, U-shaped enclosures, and four-plane enclosures.",
        keyConcepts: ["المستويات المتوازية (Parallel Planes)", "الزاوية L-Configuration", "الاحتواء الكامل (Complete Enclosure)"]
      },
      {
        id: "m3_s4",
        swf: "swfs/m3_s4.swf",
        titleAr: "الفتحات في عناصر تحديد الفضاء",
        titleEn: "Openings in Space-Defining Elements",
        descAr: "دراسة الفتحات وتأثيرها على سلامة السطح: فتحات داخل المستويات، فتحات عند الزوايا والأركان (تخفيف الكتلة)، وفتحات بين المستويات (الإنارة السماوية).",
        descEn: "Openings and their impact on spatial enclosure: openings within planes, corner openings eroding mass, and clerestories/skylights between planes.",
        keyConcepts: ["نافذة الزاوية (Corner Window)", "الإنارة العلوية (Clerestory)", "استمرارية الفضاء (Spatial Continuity)"]
      },
      {
        id: "m3_s5",
        swf: "swfs/m3_s5.swf",
        titleAr: "الخصائص النوعية للفضاء المعماري",
        titleEn: "Qualities of Architectural Space",
        descAr: "كيف تؤثر الخصائص المادية على الشعور بالفضاء: دخول الضوء الطبيعي وتوزيعه، اتجاهات الرؤية والإطلالة، درجة الاحتواء والانغلاق، والمقياس بالنسبة للمستخدم.",
        descEn: "Sensory qualities of space: daylight infiltration and shadow play, framed vistas and visual axes, degree of enclosure, and tactile architectural scale.",
        keyConcepts: ["الضوء والظلال (Light & Shadow)", "تأطير المشهد (Framed Views)", "درجة الاحتواء (Degree of Enclosure)"]
      }
    ]
  },
  {
    id: "m4",
    number: "04",
    titleAr: "التنظيم الفضائي",
    titleEn: "Organization",
    conceptAr: "العلاقات المكانية والمنظومات الفضائية التكوينية",
    conceptEn: "Spatial relationships and structural organizational patterns",
    icon: "lucide-network",
    color: "#ff006e",
    sections: [
      {
        id: "m4_s1",
        swf: "swfs/m4_s1.swf",
        titleAr: "العلاقات الفضائية الأساسية",
        titleEn: "Spatial Relationships",
        descAr: "أنماط الترابط بين الفضاءات المعمارية: فضاء داخل فضاء آخر، فضاءات متداخلة تشترك في منطقة وسطى، فضاءات متجاورة تفصلها حدود، وفضاءات مرتبطة بفضاء وسيط.",
        descEn: "Fundamental spatial connections: Space within a space, interlocking spaces sharing a common zone, adjacent spaces with shared boundaries, and spaces linked by a common zone.",
        keyConcepts: ["فضاء داخل فضاء (Space within a Space)", "الفضاءات المتداخلة (Interlocking Spaces)", "الفضاء الوسيط (Linking Space)"]
      },
      {
        id: "m4_s2",
        swf: "swfs/m4_s2.swf",
        titleAr: "المنظومات الفضائية الخمس",
        titleEn: "Spatial Organizations",
        descAr: "الأنماط الخمسة لتنظيم الفضاءات وتوزيعها: المنظومة المركزية (حول مركز سائد)، الخطية (على مسار متتابع)، الإشعاعية (أذرع ممتدة)، العنقودية (تجمعات متجاورة)، والشبكية (نظام محاور).",
        descEn: "The five architectural organizations: Centralized (dominant focal hub), Linear (sequential path), Radial (extending arms), Clustered (proximity groups), and Grid (modular coordinate framework).",
        keyConcepts: ["التنظيم المركزي (Centralized)", "التنظيم الخطي (Linear)", "التنظيم الإشعاعي (Radial)", "التنظيم العنقودي (Clustered)", "التنظيم الشبكي (Grid)"]
      }
    ]
  },
  {
    id: "m5",
    number: "05",
    titleAr: "الحركة وتدفق المسارات",
    titleEn: "Circulation",
    conceptAr: "تجربة الانتقال عبر الفضاء: الاقتراب، المداخل، وتكوين المسارات",
    conceptEn: "The experiential journey through space: approach, entrances, and path geometry",
    icon: "lucide-footprints",
    color: "#fb5607",
    sections: [
      {
        id: "m5_s1",
        swf: "swfs/m5_s1.swf",
        titleAr: "الاقتراب والمدخل المعماري",
        titleEn: "Approach & Entrance",
        descAr: "مسار الاقتراب من المبنى: الاقتراب الأمامي المباشر، الاقتراب المائل المنظوري، والاقتراب الحلزوني الدائري. أشكال المداخل: المستوية، الغائرة المحمية، والبارزة الموجهة.",
        descEn: "Building approach trajectories: Frontal direct approach, Oblique perspective approach, and Spiral circuitous approach. Entrance portals: flush, projected, and recessed.",
        keyConcepts: ["الاقتراب الأمامي والمائل (Frontal vs. Oblique)", "المدخل الغائر (Recessed Portal)", "المدخل البارز (Projected Canopy)"]
      },
      {
        id: "m5_s2",
        swf: "swfs/m5_s2.swf",
        titleAr: "تكوين وتخطيط مسار الحركة",
        titleEn: "Configuration of the Path",
        descAr: "الهندسة الحاكمة لمسار حركة المستخدم: المسار الخطي البسيط، المسار الإشعاعي، المسار الحلزوني، المسار الشبكي، والمسار المركب العضوي.",
        descEn: "Geometry guiding human circulation: linear corridors, radial spokes, ascending spirals, grid networks, and network composite pathways.",
        keyConcepts: ["المسار الخطي والحلزوني (Linear & Spiral Path)", "تقاطع المسارات (Path Intersections)", "التسلسل الحركي (Circulation Sequence)"]
      },
      {
        id: "m5_s3",
        swf: "swfs/m5_s3.swf",
        titleAr: "علاقة المسار بالفضاء وهيئة فضاء الحركة",
        titleEn: "Path-Space Relationships & Form",
        descAr: "علاقة ممر الحركة بالفراغات: المرور بجانب الفضاءات، المرور عبر الفضاء مباشرة، أو إنهاء المسار داخل الفضاء. أشكال الفضاء الحركي: الممر المغلق، الرواق المفتوح، والفناء الشامل.",
        descEn: "Path-space interface: passing by spaces, passing through spaces, or terminating within a space. Form of circulation: enclosed corridor, open arcade, and grand atrium.",
        keyConcepts: ["المرور بجانب / عبر الفضاء (Pass By vs. Through)", "الرواق والممرات المغطاة (Colonnade / Arcade)", "فضاء التوزيع (Distribution Space)"]
      }
    ]
  },
  {
    id: "m6",
    number: "06",
    titleAr: "النسبة والمقياس",
    titleEn: "Proportion & Scale",
    conceptAr: "الأنظمة الرياضية والهندسية للجمال والتناسب الإنساني في العمارة",
    conceptEn: "Mathematical and anthropometric systems of harmony and visual resonance",
    icon: "lucide-ruler",
    color: "#ffbe0b",
    sections: [
      {
        id: "m6_s1",
        swf: "swfs/m6_s1.swf",
        titleAr: "النسب المادية، النسبة الذهبية والخطوط المنظمة",
        titleEn: "Materials, Structure, Golden Section & Regulating Lines",
        descAr: "النسب النابعة من خواص مواد البناء والإنشاء. النسبة الذهبية (Phi = 1.618) وتطبيقاتها في المستطيل الذهبي. استخدام الخطوط المنظمة (Regulating Lines) لضبط هارموني الواجهات والمساقط.",
        descEn: "Material and structural proportions. The Golden Section (Phi = 1.618) and golden rectangles. Use of regulating lines to guarantee harmonic unity in elevations and plans.",
        keyConcepts: ["النسبة الذهبية (Golden Section φ)", "الخطوط المنظمة (Regulating Lines)", "التناسب الإنشائي (Structural Proportion)"]
      },
      {
        id: "m6_s2",
        swf: "swfs/m6_s2.swf",
        titleAr: "الأوامر الكلاسيكية، المودولور والمقياس الإنساني",
        titleEn: "Classical Orders, Modulor & Human Scale",
        descAr: "أنظمة التناسب التاريخية: الأوامر الكلاسيكية (الدوري، الأيوني، الكورنثي)، عصر النهضة، نظام المودولور لكوربوزييه المبني على جسم الإنسان والمتوالية الهندسية، والمقياس الإنساني.",
        descEn: "Historical proportional systems: Classical Orders (Doric, Ionic, Corinthian), Renaissance harmonic ratios, Le Corbusier's Modulor, and anthropometric scale.",
        keyConcepts: ["الأوامر الكلاسيكية (Classical Orders)", "المودولور لكوربوزييه (Le Modulor)", "المقياس الإنساني (Human Scale)"]
      }
    ]
  },
  {
    id: "m7",
    number: "07",
    titleAr: "مبادئ النظام والتأليف",
    titleEn: "Principles of Order",
    conceptAr: "المبادئ الحاكمة للتأليف والترتيب المعماري: المحور، التماثل، التدرج، المرجع، والإيقاع",
    conceptEn: "Governing compositional axioms: Axis, symmetry, hierarchy, datum, and rhythm",
    icon: "lucide-compass",
    color: "#06d6a0",
    sections: [
      {
        id: "m7_s1",
        swf: "swfs/m7_s1.swf",
        titleAr: "المحور والتماثل المعماري",
        titleEn: "Axis & Symmetry",
        descAr: "المحور كخط وهمي خطي يؤلف وينظم العناصر على جانبيه. التماثل الثنائي (Bilateral Symmetry)، التماثل الشعاعي/المركزي، واستخدام المحاور لربط المعالم والمداخل.",
        descEn: "The axis as an implied line ordering elements. Bilateral symmetry, radial symmetry, and axial alignments anchoring monuments, portals, and vistas.",
        keyConcepts: ["المحور البصري (Visual Axis)", "التماثل الثنائي (Bilateral Symmetry)", "التماثل الإشعاعي (Radial Symmetry)"]
      },
      {
        id: "m7_s2",
        swf: "swfs/m7_s2.swf",
        titleAr: "التدرج والتنظيم الهرمي",
        titleEn: "Hierarchy",
        descAr: "إبراز أهمية عنصر أو فضاء معماري بين العناصر الأخرى: التميز بالحجم والمقياس الاستثنائي، التميز بالشكل الهندسي المتفرد، أو التميز بالموضع الاستراتيجي.",
        descEn: "Articulating dominance and importance: Hierarchy by exceptional size, hierarchy by unique shape, and hierarchy by strategic spatial location/culmination.",
        keyConcepts: ["الهيمنة بالحجم (Hierarchy by Size)", "الهيمنة بالشكل (Hierarchy by Shape)", "الهيمنة بالموضع (Hierarchy by Placement)"]
      },
      {
        id: "m7_s3",
        swf: "swfs/m7_s3.swf",
        titleAr: "المرجع الحاكم (الأساس)",
        titleEn: "Datum",
        descAr: "المرجع كخط أو مستوى أو حجم يعمل كأرضية جامعة لربط وتنسيق تشكيلات متنوعة ومتباينة من العناصر المعمارية غير المنتظمة ودمجها في كلية متسقة.",
        descEn: "A datum as a line, plane, or volume that gathers, measures, and integrates disparate, irregular architectural elements into a cohesive whole.",
        keyConcepts: ["المستوى المرجعي (Datum Plane)", "المحور الجامع (Datum Line)", "الرواق الحاكم (Organizing Volume)"]
      },
      {
        id: "m7_s4",
        swf: "swfs/m7_s4.swf",
        titleAr: "الإيقاع، التكرار والتحول",
        titleEn: "Rhythm, Repetition & Transformation",
        descAr: "حركة العين عبر التكرار المنظم للمسافات والفتحات والأعمدة. الإيقاع البسيط والتركيبي. مبدأ التحول (Transformation) لتطوير نموذج معماري عبر سياقات متعددة.",
        descEn: "Guiding the eye through patterned repetition of structural bays, columns, and voids. Simple and compound rhythm. Architectural transformation through variations of a prototype.",
        keyConcepts: ["الإيقاع والترديد (Rhythm & Repetition)", "الموديول المتكرر (Modular Bay)", "التحول النموذجي (Typological Transformation)"]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ARCH_MODULES };
}
