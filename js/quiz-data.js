/**
 * CHING ARCHITECTURAL HUB - QUIZ DATA
 * Interactive self-assessment quizzes for architecture students based on Francis Ching
 */

const ARCH_QUIZZES = {
  m1: {
    titleAr: "اختبار الفصل الأول: العناصر الأساسية",
    titleEn: "Quiz 01: Primary Elements",
    questions: [
      {
        questionAr: "ما هو العنصر المعماري الذي يمتلك موقعاً في الفضاء ولكنه نظرياً مجرد من الأبعاد الثلاثة؟",
        questionEn: "Which architectural element indicates a position in space but conceptually has zero dimensions?",
        optionsAr: ["الخط (Line)", "النقطة (Point)", "المستوى (Plane)", "الحجم (Volume)"],
        optionsEn: ["Line", "Point", "Plane", "Volume"],
        correctIndex: 1,
        explanationAr: "النقطة هي البداية النظرية للتكوين، وهي موقع في الفراغ بدون طول أو عرض أو عمق، وعند حركتها تولد الخط.",
        explanationEn: "A point marks a position in space with zero dimensions. The movement or extension of a point generates a line."
      },
      {
        questionAr: "عند وضع نقطتين متجاورتين في الفراغ، ما هو التأثير البصري المباشر الذي يتولد بينهما؟",
        questionEn: "When two points are placed in a spatial field, what primary visual effect is generated?",
        optionsAr: ["مستوى محصور", "محور خطي وهمي وتوتر بصري", "حجم مصمت ثلاثي الأبعاد", "فراغ كروي مغلق"],
        optionsEn: ["An enclosed plane", "An implied linear axis and visual tension", "A 3D solid mass", "An enclosed spherical void"],
        correctIndex: 1,
        explanationAr: "تولد النقطتان خطاً وهمياً يربط بينهما، مما يخلق محوراً غير مرئي وتوتراً بصرياً يوجه العين بينهما.",
        explanationEn: "Two points generate an implied linear connection, establishing a visual axis and an energetic tension across the space between them."
      },
      {
        questionAr: "وفقاً لتصنيف فرانسيس شينغ، ما هي المستويات الثلاثة الأساسية المحددة للحيز المعماري؟",
        questionEn: "According to Francis Ching, what are the three primary planes defining architectural space?",
        optionsAr: ["المستوى الأفقي، المائل، والمنحني", "مستوى الأرضية (القاعدة)، مستوى الجدار، ومستوى السقف", "مستوى الكتلة، مستوى الفراغ، ومستوى الظل", "مستوى الواجهة، مستوى القطاع، ومستوى الموقع"],
        optionsEn: ["Horizontal, inclined, and curved planes", "Base (ground) plane, vertical wall plane, and overhead plane", "Mass plane, void plane, and shadow plane", "Elevation, section, and site planes"],
        correctIndex: 1,
        explanationAr: "يحدد الفضاء المعماري بمستوى القاعدة (الأرضية)، والمستويات الرأسية (الجدران/الأعمدة)، ومستوى السقف المغطي.",
        explanationEn: "Architectural enclosure is delineated by the base plane (ground), vertical wall planes, and the overhead plane (roof/ceiling)."
      }
    ]
  },
  m2: {
    titleAr: "اختبار الفصل الثاني: الشكل والتشكيل",
    titleEn: "Quiz 02: Form",
    questions: [
      {
        questionAr: "ما هو المصطلح الذي يعبر عن درجة استقرار وثبات الشكل الهندسي بالنسبة للجاذبية وقاعدة ارتكازه؟",
        questionEn: "Which term denotes the visual concentration and degree of stability of a geometric form relative to gravity and its resting base?",
        optionsAr: ["القصور البصري (Visual Inertia)", "الملمس السطحي (Texture)", "التحول البعدي (Dimensional Shift)", "الانغلاق الفضائي (Enclosure)"],
        optionsEn: ["Visual Inertia", "Surface Texture", "Dimensional Shift", "Spatial Enclosure"],
        correctIndex: 0,
        explanationAr: "القصور البصري (Visual Inertia) هو مدى شعور العين باستقرار وثبات الشكل، مثل استقرار المربع واستثارة المثلث المستند على رأسه.",
        explanationEn: "Visual Inertia is the degree of apparent stability of a shape, resting on its base geometry, orientation, and center of gravity."
      },
      {
        questionAr: "تعتبر عملية حفر فناء داخلي أو تجويف مدخل داخل كتلة مكعبة مثالاً على:",
        questionEn: "Carving an interior courtyard or an entrance recess out of a solid cubic mass is an example of:",
        optionsAr: ["التشكيل الإضافي (Additive Form)", "التشكيل الطرحي (Subtractive Form)", "التنظيم الشبكي (Grid Organization)", "التماثل المحوري (Axial Symmetry)"],
        optionsEn: ["Additive Form", "Subtractive Form", "Grid Organization", "Axial Symmetry"],
        correctIndex: 1,
        explanationAr: "التشكيل الطرحي (Subtractive Transformation) يتم بحذف أو اقتطاع أجزاء من كتلة حجمية أصلية لإنشاء فراغات وظلال.",
        explanationEn: "Subtractive transformation involves sculpting away sections of an initial mass to create voids, portals, and shadow play."
      }
    ]
  },
  m3: {
    titleAr: "اختبار الفصل الثالث: الشكل والفضاء",
    titleEn: "Quiz 03: Form & Space",
    questions: [
      {
        questionAr: "ما هو تأثير 'نافذة الزاوية' (Corner Window) على إدراك الكتلة المعمارية؟",
        questionEn: "What is the visual impact of a 'Corner Window' on the perception of architectural mass?",
        optionsAr: ["زيادة الإحساس بثقل الجدار والكتلة", "كسر صلابة الزاوية وتخفيف الشعور بوزن الكتلة والسماح باستمرارية الفضاء", "عزل الفضاء الداخلي تماماً عن الخارج", "تحويل الغرفة إلى شكل أسطواني"],
        optionsEn: ["Increases the perceived heaviness of the walls", "Breaks corner rigidity, lightens the volumetric mass, and establishes spatial continuity", "Completely isolates the interior from the exterior", "Turns the room into a cylindrical shape"],
        correctIndex: 1,
        explanationAr: "تؤدي فتحات الزاوية إلى تفكيك التقاء المستويات، مما يقلل من ثقل الكتلة ويمنح إطلالة متسعة وضوءاً ثنائياً.",
        explanationEn: "A corner window dematerializes the structural intersection of two perpendicular planes, lightening the visual mass and expanding the field of view."
      },
      {
        questionAr: "كيف يؤثر 'مستوى القاعدة المرفوع' (Elevated Base Plane) على المنطقة الفضائية التي يعلوها؟",
        questionEn: "How does an 'Elevated Base Plane' affect the spatial zone it defines?",
        optionsAr: ["يمنحها طابعاً عادياً وثانوياً", "يفصلها ويعطيها قدسية وأهمية وتميزاً بصرياً عن المحيط", "يخفيها تماماً عن عيون المارة", "يحولها إلى مسار حركة سريع"],
        optionsEn: ["Renders it mundane and secondary", "Isolates and imbues it with prominence, dignity, and visual distinction", "Completely conceals it from onlookers", "Converts it into a rapid thoroughfare"],
        correctIndex: 1,
        explanationAr: "رفع المستوى عن سطح الأرض هو أقدم الأساليب المعمارية لتمييز المعابد والمباني الرسمية ومنحها وقاراً وسيادة.",
        explanationEn: "Elevating a plane above ground level is a fundamental archetype used to signal sacredness, authority, and ceremonial prominence."
      }
    ]
  },
  m4: {
    titleAr: "اختبار الفصل الرابع: التنظيم الفضائي",
    titleEn: "Quiz 04: Organization",
    questions: [
      {
        questionAr: "أي المنظومات الفضائية التالية تتميز بوجود فضاء مهيمن في المنتصف تتجمع وتنتظم حوله بقية الفضاءات؟",
        questionEn: "Which spatial organization features a dominant central volume around which secondary spaces are clustered?",
        optionsAr: ["المنظومة الخطية (Linear)", "المنظومة الشبكية (Grid)", "المنظومة المركزية (Centralized)", "المنظومة العنقودية (Clustered)"],
        optionsEn: ["Linear", "Grid", "Centralized", "Clustered"],
        correctIndex: 2,
        explanationAr: "المنظومة المركزية تنظيم استقراري داخلي يركز على نقطة مركزية كبرى كالقبة أو الفناء الأوسط.",
        explanationEn: "A centralized organization is an inward-facing composition anchored by a dominant core space."
      },
      {
        questionAr: "عندما تتقاطع مساحتان معماريان في منطقة مشتركة يتقاسمانها معاً، تسمى هذه العلاقة:",
        questionEn: "When two architectural spaces overlap to share a common mutual zone, this relationship is known as:",
        optionsAr: ["فضاء داخل فضاء (Space within a Space)", "فضاءات متداخلة (Interlocking Spaces)", "فضاءات متجاورة (Adjacent Spaces)", "فضاءات متباعدة (Isolated Spaces)"],
        optionsEn: ["Space within a Space", "Interlocking Spaces", "Adjacent Spaces", "Isolated Spaces"],
        correctIndex: 1,
        explanationAr: "الفضاءات المتداخلة تشترك في منطقة متقاطعة تكون ملكاً لكل من الفضاءين وتعزز الاتصال الوظيفي والبصري.",
        explanationEn: "Interlocking spaces share a defined overlap zone that mediates between them, forging a strong perceptual and functional link."
      }
    ]
  },
  m5: {
    titleAr: "اختبار الفصل الخامس: الحركة والمسارات",
    titleEn: "Quiz 05: Circulation",
    questions: [
      {
        questionAr: "ما هو نوع 'الاقتراب' الذي يمنح الزائر فرصة لرؤية المبنى ككتلة مجسمة ثلاثية الأبعاد بوضوح قبل دخوله؟",
        questionEn: "Which type of 'approach' best affords the visitor an explicit three-dimensional perspective of the building's mass before entering?",
        optionsAr: ["الاقتراب الأمامي المباشر (Frontal)", "الاقتراب المائل (Oblique)", "الاقتراب النفق السري", "الاقتراب الرأسي المباشر"],
        optionsEn: ["Frontal direct approach", "Oblique approach", "Secret tunnel approach", "Direct vertical approach"],
        correctIndex: 1,
        explanationAr: "الاقتراب المائل (Oblique Approach) يعرض جانبي المبنى وركنه في المنظور، مما يبرز الأبعاد والعمق المجسم للكتلة.",
        explanationEn: "An oblique approach directs the observer along an angled trajectory, revealing the corner and adjacent facades in 3D perspective depth."
      }
    ]
  },
  m6: {
    titleAr: "اختبار الفصل السادس: النسبة والمقياس",
    titleEn: "Quiz 06: Proportion & Scale",
    questions: [
      {
        questionAr: "ما هي القيمة التقريبية للنسبة الذهبية (Phi φ) المستخدمة تاريخياً في تناسب الواجهات والمستطيلات؟",
        questionEn: "What is the approximate mathematical value of the Golden Section (Phi φ)?",
        optionsAr: ["3.14159", "1.618", "2.718", "1.414"],
        optionsEn: ["3.14159", "1.618", "2.718", "1.414"],
        correctIndex: 1,
        explanationAr: "النسبة الذهبية تساوي تقريباً 1.6180339، وتنتج مستطيلاً ذا تناسب طبيعي متزن بصرياً.",
        explanationEn: "The Golden Section ratio is approximately 1.618, celebrated for its naturally harmonious geometric properties."
      },
      {
        questionAr: "نظام 'المودولور' (Modulor) ابتكره أي من رواد العمارة الحديثة لربط القياسات بجسم الإنسان؟",
        questionEn: "The 'Modulor' proportional system was invented by which pioneer of modern architecture to link building metrics to the human body?",
        optionsAr: ["فرانك لويد رايت (Frank Lloyd Wright)", "ميس فان دير روه (Mies van der Rohe)", "لوكوربوزييه (Le Corbusier)", "والتر جروبيوس (Walter Gropius)"],
        optionsEn: ["Frank Lloyd Wright", "Mies van der Rohe", "Le Corbusier", "Walter Gropius"],
        correctIndex: 2,
        explanationAr: "ابتكر لوكوربوزييه نظام المودولور عام 1948 بالاعتماد على قامة الإنسان القياسية والنسبة الذهبية.",
        explanationEn: "Le Corbusier devised Le Modulor in 1948 based on anthropometric dimensions and the Golden Ratio."
      }
    ]
  },
  m7: {
    titleAr: "اختبار الفصل السابع: مبادئ النظام والتأليف",
    titleEn: "Quiz 07: Principles of Order",
    questions: [
      {
        questionAr: "عنصر محايد (خط، مستوى، أو حجم) يجمع وينظم ويوحد مجموعة متنوعة من الأشكال والفضاءات غير المنتظمة يسمى:",
        questionEn: "An organizing element (line, plane, or volume) that gathers, measures, and unites diverse irregular shapes into a coherent whole is termed a:",
        optionsAr: ["محور (Axis)", "مرجع حاسم / أساس (Datum)", "تماثل شعاعي (Radial Symmetry)", "تحول بعدي (Dimensional Shift)"],
        optionsEn: ["Axis", "Datum", "Radial Symmetry", "Dimensional Shift"],
        correctIndex: 1,
        explanationAr: "المرجع (Datum) هو العنصر الحاكم الذي ترتبط به العناصر المتباينة لتكتسب وحدة وتناغماً في التكوين المعماري.",
        explanationEn: "A Datum is an ordering device (line, plane, or volume) that integrates contrasting forms by serving as a common reference framework."
      },
      {
        questionAr: "يمكن تحقيق التدرج والتنظيم الهرمي (Hierarchy) لعنصر معماري في الواجهة من خلال:",
        questionEn: "Architectural hierarchy can be articulated through:",
        optionsAr: ["الحجم الاستثنائي فقط", "الشكل الهندسي المتفرد فقط", "الموقع الاستراتيجي في التكوين فقط", "كل ما سبق (الحجم، الشكل، والموضع)"],
        optionsEn: ["Exceptional size only", "Unique shape only", "Strategic location only", "All of the above (Size, Shape, and Placement)"],
        correctIndex: 3,
        explanationAr: "يتحقق التدرج الهرمي (Hierarchy) بتمييز العنصر المعماري في الحجم (Scale)، أو في الشكل الهندسي (Form)، أو في الموقع والمركز (Placement).",
        explanationEn: "Hierarchy is achieved by articulating dominance through notable size, distinctive geometric shape, or strategic culmination in placement."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ARCH_QUIZZES };
}
