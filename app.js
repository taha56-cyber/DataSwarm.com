/* =========================================================
   DATA SWARM - COMPLETE APP.JS
   Made by Taha Karmani
   Multilingual Aquatic Data Marketplace & Simulation
   Languages: English (EN), French (FR), Arabic (AR)
   ========================================================= */

'use strict';

/* =========================================================
   1. TRANSLATIONS (i18n) DICTIONARY
   ========================================================= */

const translations = {
  en: {
    app_title: "Data Swarm",
    app_subtitle: "Aquatic Data Library",
    auth_eyebrow: "A living library of fish data",
    auth_heading: "Follow the<br><em>whole school.</em>",
    auth_desc: "Discover datasets that make aquatic life visible, one signal at a time.",
    auth_swarm_status: "The swarm follows your cursor",
    login_eyebrow: "Welcome back",
    login_title: "Enter the water",
    login_label_name: "Your name",
    login_name_ph: "Taha",
    login_label_email: "Email address",
    login_email_ph: "you@example.com",
    login_btn: "Sign in to Data Swarm",
    login_note: "Your name appears when you explore and download datasets.",
    login_err_name: "Please enter your name.",
    login_err_name_len: "Your name must contain at least 2 characters.",
    login_err_email: "Please enter a valid email address.",
    login_err_registered: "That name is already registered on this device. Please choose another name.",
    nav_explore: "Explore data",
    nav_researchers: "For researchers",
    balance_label: "Balance:",
    btn_welcome_email: "Email welcome note",
    btn_logout: "Back to login",
    btn_my_downloads: "My downloads",
    hero_eyebrow: "The living data library",
    hero_heading: "Better questions<br><em>start in the water.</em>",
    hero_intro: "Curated fish datasets for ocean lovers, students, storytellers, and scientists. Find a dataset, follow the evidence, make something meaningful.",
    hero_cta: "Browse the collection",
    catalog_eyebrow: "Field notes / 004",
    catalog_heading: "Find your next field trip.",
    catalog_note: "Every dataset is documented, downloadable, and made to be understood.",
    search_placeholder: "Search species, place, or topic",
    filter_all: "All data",
    filter_oceans: "Oceans",
    filter_freshwater: "Freshwater",
    filter_climate: "Climate",
    buy_btn: "Buy data",
    photo_label: "Fish photograph",
    formats_label: "TXT · CSV · JSON",
    empty_catalog: "No datasets match that search yet.",
    redeem_eyebrow: "Have a code?",
    redeem_title: "Add credits to your library.",
    redeem_desc: "Enter your code below and the credits will be added to this device.",
    redeem_input_ph: "Enter your code",
    redeem_btn: "Redeem code",
    redeem_empty: "Please enter a code.",
    redeem_invalid: "That code is not valid.",
    redeem_success: "{amount} credits added. Your balance is {balance}.",
    gallery_eyebrow: "From the field archive",
    gallery_title: "Meet the subjects.",
    gallery_desc: "Real underwater references for the curious minds behind every dataset.",
    gallery_caption_1: "Reef fish / coral gardens",
    gallery_caption_2: "Open water / shark routes",
    gallery_caption_3: "Mangrove nurseries / Mangrove Jack",
    about_eyebrow: "Built for curious minds",
    about_heading: "Data should feel<br><em>alive.</em>",
    about_desc: "Data Swarm makes the hidden patterns of aquatic life easier to find and more rewarding to explore. Each collection pairs clean files with context from the people who gathered them.",
    about_link: "Talk to the swarm ↗",
    footer_copy: "© 2026 Data Swarm",
    footer_credit: "Made by Taha Karmani",
    preview_eyebrow: "Photo preview",
    preview_desc: "Review the fish photo before adding this dataset to your bag.",
    preview_link: "Open original photo ↗",
    checkout_eyebrow: "Data Swarm checkout",
    checkout_title: "Choose payment",
    checkout_price: "Dataset price:",
    checkout_balance_label: "Your balance",
    checkout_pay_balance: "Pay with balance",
    checkout_or: "or",
    checkout_pay_paypal: "Pay with PayPal",
    checkout_pay_card: "Pay with bank card",
    checkout_secure: "Demo checkout — no real card or PayPal payment is processed.",
    checkout_need_more: "You need {amount} more",
    checkout_success: "Payment successful",
    checkout_external_demo: "{method} demo payment\n\nDataset: {title}\nPrice: {price}\n\nPress OK to simulate a successful payment.",
    checkout_external_success: "{method} payment successful",
    download_started: "{title} downloaded ({format})",
    wallet_eyebrow: "Data Swarm wallet",
    wallet_title: "Your balance",
    wallet_available: "Available credits",
    wallet_redeem_label: "Redeem credit code",
    wallet_code_ph: "Enter code",
    wallet_redeem_btn: "Redeem",
    library_eyebrow: "Your collection",
    library_title: "My downloads",
    library_intro: "Datasets you've purchased from Data Swarm.",
    library_empty: "You haven't purchased any datasets yet.",
    library_download_txt: "Download TXT",
    library_download_csv: "Download CSV",
    library_download_json: "Download JSON",
    toast_signin_first: "Please sign in first",
    toast_welcome_sent: "Welcome note prepared for {email}"
  },
  fr: {
    app_title: "Data Swarm",
    app_subtitle: "Bibliothèque de données aquatiques",
    auth_eyebrow: "Une bibliothèque vivante de données marines",
    auth_heading: "Suivez tout<br><em>le banc de poissons.</em>",
    auth_desc: "Découvrez des jeux de données qui révèlent la vie sous-marine, un signal à la fois.",
    auth_swarm_status: "L'essaim suit votre curseur",
    login_eyebrow: "Bon retour",
    login_title: "Plongez dans l'eau",
    login_label_name: "Votre nom",
    login_name_ph: "Taha",
    login_label_email: "Adresse e-mail",
    login_email_ph: "vous@exemple.com",
    login_btn: "Se connecter à Data Swarm",
    login_note: "Votre nom apparaît lorsque vous explorez et téléchargez des données.",
    login_err_name: "Veuillez entrer votre nom.",
    login_err_name_len: "Votre nom doit contenir au moins 2 caractères.",
    login_err_email: "Veuillez entrer une adresse e-mail valide.",
    login_err_registered: "Ce nom est déjà enregistré sur cet appareil. Veuillez en choisir un autre.",
    nav_explore: "Explorer les données",
    nav_researchers: "Pour les chercheurs",
    balance_label: "Solde :",
    btn_welcome_email: "E-mail de bienvenue",
    btn_logout: "Déconnexion",
    btn_my_downloads: "Mes téléchargements",
    hero_eyebrow: "La bibliothèque de données vivante",
    hero_heading: "Les meilleures questions<br><em>naissent dans l'eau.</em>",
    hero_intro: "Jeux de données sur les poissons pour les passionnés d'océan, étudiants et scientifiques. Choisissez un jeu de données, suivez les indices, créez de l'impact.",
    hero_cta: "Parcourir la collection",
    catalog_eyebrow: "Notes de terrain / 004",
    catalog_heading: "Trouvez votre prochaine expédition.",
    catalog_note: "Chaque jeu de données est documenté, téléchargeable et clair.",
    search_placeholder: "Rechercher une espèce, un lieu, un sujet...",
    filter_all: "Toutes les données",
    filter_oceans: "Océans",
    filter_freshwater: "Eaux douces",
    filter_climate: "Climat",
    buy_btn: "Acheter",
    photo_label: "Photographie marine",
    formats_label: "TXT · CSV · JSON",
    empty_catalog: "Aucun jeu de données ne correspond à cette recherche.",
    redeem_eyebrow: "Vous avez un code ?",
    redeem_title: "Ajoutez des crédits à votre compte.",
    redeem_desc: "Entrez votre code ci-dessous pour créditer votre solde sur cet appareil.",
    redeem_input_ph: "Entrez votre code",
    redeem_btn: "Utiliser le code",
    redeem_empty: "Veuillez entrer un code.",
    redeem_invalid: "Ce code n'est pas valide.",
    redeem_success: "{amount} crédits ajoutés. Votre solde est de {balance}.",
    gallery_eyebrow: "Archives de terrain",
    gallery_title: "Rencontrez les espèces.",
    gallery_desc: "De véritables références sous-marines pour accompagner vos recherches.",
    gallery_caption_1: "Poissons de récif / jardins coralliens",
    gallery_caption_2: "Pleine mer / routes des requins",
    gallery_caption_3: "Pépinières de mangroves / Vivaneau des mangroves",
    about_eyebrow: "Conçu pour les esprits curieux",
    about_heading: "Les données doivent<br><em>être vivantes.</em>",
    about_desc: "Data Swarm rend les mystères de la vie aquatique accessibles et passionnants à explorer. Chaque collection associe des données fiables au contexte de leurs explorateurs.",
    about_link: "Contacter l'équipe ↗",
    footer_copy: "© 2026 Data Swarm",
    footer_credit: "Créé par Taha Karmani",
    preview_eyebrow: "Aperçu de la photo",
    preview_desc: "Examinez la photo avant d'ajouter ce jeu de données.",
    preview_link: "Ouvrir la photo originale ↗",
    checkout_eyebrow: "Paiement Data Swarm",
    checkout_title: "Choisir le mode de paiement",
    checkout_price: "Prix du jeu de données :",
    checkout_balance_label: "Votre solde",
    checkout_pay_balance: "Payer avec mon solde",
    checkout_or: "ou",
    checkout_pay_paypal: "Payer avec PayPal",
    checkout_pay_card: "Payer par carte bancaire",
    checkout_secure: "Paiement de démonstration — aucun prélèvement bancaire réel.",
    checkout_need_more: "Il vous manque {amount}",
    checkout_success: "Paiement réussi",
    checkout_external_demo: "Paiement démo {method}\n\nJeu de données : {title}\nPrix : {price}\n\nAppuyez sur OK pour simuler un paiement réussi.",
    checkout_external_success: "Paiement {method} réussi",
    download_started: "{title} téléchargé ({format})",
    wallet_eyebrow: "Portefeuille Data Swarm",
    wallet_title: "Votre solde",
    wallet_available: "Crédits disponibles",
    wallet_redeem_label: "Utiliser un code promo",
    wallet_code_ph: "Entrez le code",
    wallet_redeem_btn: "Valider",
    library_eyebrow: "Votre collection",
    library_title: "Mes téléchargements",
    library_intro: "Jeux de données achetés sur Data Swarm.",
    library_empty: "Vous n'avez pas encore acheté de données.",
    library_download_txt: "Télécharger TXT",
    library_download_csv: "Télécharger CSV",
    library_download_json: "Télécharger JSON",
    toast_signin_first: "Veuillez vous connecter d'abord",
    toast_welcome_sent: "Message de bienvenue préparé pour {email}"
  },
  ar: {
    app_title: "داتا سوارم (Data Swarm)",
    app_subtitle: "المكتبة الرقمية للبيانات المائية",
    auth_eyebrow: "مكتبة حية لبيانات الأسماك والحياة البحرية",
    auth_heading: "اتبع سرب<br><em>الأسماك بالكامل.</em>",
    auth_desc: "اكتشف مجموعات البيانات العلمية التي تجعل الحياة المائية مرئية وواضحة، إشارة تلو الأخرى.",
    auth_swarm_status: "السرب يتبع حركة المؤشر بدقة",
    login_eyebrow: "مرحباً بعودتك",
    login_title: "ادخل إلى الأعماق",
    login_label_name: "الاسم",
    login_name_ph: "طه",
    login_label_email: "البريد الإلكتروني",
    login_email_ph: "you@example.com",
    login_btn: "الدخول إلى داتا سوارم",
    login_note: "يظهر اسمك عند استكشاف مجموعات البيانات وتنزيلها.",
    login_err_name: "يرجى إدخال اسمك.",
    login_err_name_len: "يجب أن يتكون الاسم من حرفين على الأقل.",
    login_err_email: "يرجى إدخال بريد إلكتروني صحيح.",
    login_err_registered: "هذا الاسم مسجل بالفعل على هذا الجهاز. يرجى اختيار اسم آخر.",
    nav_explore: "استكشف البيانات",
    nav_researchers: "للباحثين والعلماء",
    balance_label: "الرصيد:",
    btn_welcome_email: "رسالة ترحيبية",
    btn_logout: "تسجيل الخروج",
    btn_my_downloads: "تنزيلاتي",
    hero_eyebrow: "مكتبة البيانات المائية الحية",
    hero_heading: "أفضل التساؤلات<br><em>تبدأ في أعماق المياه.</em>",
    hero_intro: "مجموعات بيانات منتقاة لعشاق المحيط والطلاب ورواة القصص والعلماء. اختر مجموعة بيانات، واتبع الأدلة، واصنع أبحاثاً ذات قيمة.",
    hero_cta: "تصفح المجموعة",
    catalog_eyebrow: "ملاحظات ميدانية / 004",
    catalog_heading: "حدد وجهة رحلتك الميدانية القادمة.",
    catalog_note: "كل مجموعة بيانات موثقة بالكامل، قابلة للتنزيل الفوري، ومصممة لتكون مفهومة.",
    search_placeholder: "ابحث عن نوع سمك، موطن، أو موضوع...",
    filter_all: "جميع البيانات",
    filter_oceans: "المحيطات",
    filter_freshwater: "المياه العذبة",
    filter_climate: "المناخ",
    buy_btn: "شراء البيانات",
    photo_label: "صورة توثيقية حقيقية",
    formats_label: "TXT · CSV · JSON",
    empty_catalog: "لا توجد مجموعات بيانات تطابق هذا البحث حالياً.",
    redeem_eyebrow: "هل لديك رمز ترويجي؟",
    redeem_title: "أضف رصيداً إلى محفظتك.",
    redeem_desc: "أدخل الرمز الترويجي أدناه وستتم إضافة الرصيد لحسابك على هذا الجهاز.",
    redeem_input_ph: "أدخل الرمز الترويجي",
    redeem_btn: "استرداد الرمز",
    redeem_empty: "يرجى إدخال الرمز.",
    redeem_invalid: "هذا الرمز غير صالح.",
    redeem_success: "تمت إضافة {amount} رصيد. رصيدك الحالي هو {balance}.",
    gallery_eyebrow: "من الأرشيف الميداني",
    gallery_title: "تعرف على الكائنات البحرية.",
    gallery_desc: "مراجع وصور تصويرية حقيقية تحت الماء توثق كل مجموعة بيانات.",
    gallery_caption_1: "أسماك الشعاب / حدائق المرجان",
    gallery_caption_2: "المياه المفتوحة / مسارات القروش",
    gallery_caption_3: "مشاتل المانغروف / سمك جاك المانغروف",
    about_eyebrow: "صُمم للعقول الشغوفة",
    about_heading: "البيانات يجب<br><em>أن تنبض بالحياة.</em>",
    about_desc: "يجعل داتا سوارم اكتشاف أنماط الحياة المائية أسهل وأكثر إمتاعاً. يجمع كل أرشيف بين ملفات البيانات المنظمة والسياق الميداني للباحثين الذين جمعوها.",
    about_link: "تواصل مع فريق السرب ↗",
    footer_copy: "© 2026 داتا سوارم (Data Swarm)",
    footer_credit: " تم التطوير بواسطة طه قرماني   (Taha Karmani)",
    preview_eyebrow: "معاينة الصورة",
    preview_desc: "عاين صورة الكائن البحري قبل تنزيل مجموعة البيانات.",
    preview_link: "فتح الصورة الأصلية ↗",
    checkout_eyebrow: "الدفع في داتا سوارم",
    checkout_title: "اختر طريقة الدفع",
    checkout_price: "سعر مجموعة البيانات:",
    checkout_balance_label: "رصيدك الحالي",
    checkout_pay_balance: "الدفع باستخدام الرصيد",
    checkout_or: "أو",
    checkout_pay_paypal: "الدفع بواسطة PayPal",
    checkout_pay_card: "الدفع بالبطاقة البنكية",
    checkout_secure: "دفع تجريبي — لا تتم معالجة أي مبالغ حقيقية.",
    checkout_need_more: "تحتاج إلى {amount} إضافية",
    checkout_success: "تمت عملية الدفع بنجاح",
    checkout_external_demo: "دفع تجريبي عبر {method}\n\nمجموعة البيانات: {title}\nالسعر: {price}\n\nاضغط موافق لمحاكاة نجاح الدفع.",
    checkout_external_success: "تم الدفع عبر {method} بنجاح",
    download_started: "تم تنزيل {title} بصيغة ({format})",
    wallet_eyebrow: "محفظة داتا سوارم",
    wallet_title: "رصيدك الحالي",
    wallet_available: "الرصيد المتاح",
    wallet_redeem_label: "استرداد رمز رصيد",
    wallet_code_ph: "أدخل الرمز هنا",
    wallet_redeem_btn: "تفعيل",
    library_eyebrow: "مجموعتك الخاصة",
    library_title: "تنزيلاتي",
    library_intro: "مجموعات البيانات التي قمت بشرائها من داتا سوارم.",
    library_empty: "لم تقم بشراء أي مجموعات بيانات حتى الآن.",
    library_download_txt: "تنزيل TXT",
    library_download_csv: "تنزيل CSV",
    library_download_json: "تنزيل JSON",
    toast_signin_first: "يرجى تسجيل الدخول أولاً",
    toast_welcome_sent: "تم تجهيز رسالة الترحيب للبريد {email}"
  }
};

let currentLang = localStorage.getItem('dataSwarmLang') || 'en';

function getCurrentLanguage() {
  return currentLang;
}

function t(key, params = {}) {
  const lang = getCurrentLanguage();
  let text = translations[lang]?.[key] || translations.en?.[key] || key;
  Object.keys(params).forEach(param => {
    text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
  });
  return text;
}

function setLanguage(lang) {
  if (!translations[lang]) {
    lang = 'en';
  }
  currentLang = lang;
  localStorage.setItem('dataSwarmLang', lang);

  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update active state on all language pickers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateStaticTranslations();
  renderProducts();
  updateBalanceDisplay();
  updateBrandText();
}

function updateStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = t(key);
    if (translation.includes('<') && translation.includes('>')) {
      el.innerHTML = translation;
    } else {
      el.textContent = translation;
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    el.placeholder = t(key);
  });
}

function setupLanguagePickers() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.dataset.lang;
      if (lang) {
        setLanguage(lang);
      }
    });
  });
}

/* =========================================================
   2. DATASETS (48 MULTILINGUAL DATASETS)
   ========================================================= */

const datasets = [
  {
    id: 1,
    category: 'Oceans',
    visual: 'ocean',
    price: 24,
    titles: {
      en: 'Reef census: Great Barrier Reef',
      fr: 'Recensement récifal : Grande Barrière',
      ar: 'إحصاء الشعاب المرجانية: الحاجز المرجاني العظيم'
    },
    species: {
      en: 'Reef fish',
      fr: 'Poissons de récif',
      ar: 'أسماك الشعاب'
    },
    tags: {
      en: 'Survey / 2024',
      fr: 'Enquête / 2024',
      ar: 'مسح ميداني / 2024'
    },
    descriptions: {
      en: '12,400 observations across 86 reef sites, with species, depth, and bleaching status.',
      fr: '12 400 observations sur 86 sites récifaux, avec espèces, profondeur et état de blanchissement.',
      ar: '12,400 ملاحظة عبر 86 موقعاً للشعاب، مع تحديد الأنواع والعمق وحالة التبييض.'
    }
  },
  {
    id: 2,
    category: 'Freshwater',
    visual: 'fresh',
    price: 18,
    titles: {
      en: 'The freshwater atlas',
      fr: "L'atlas des eaux douces",
      ar: 'أطلس المياه العذبة العالمي'
    },
    species: {
      en: 'Arapaima',
      fr: 'Arapaïma',
      ar: 'الأربيمة العملاقة'
    },
    tags: {
      en: 'Atlas / Global',
      fr: 'Atlas / Mondial',
      ar: 'أطلس / عالمي'
    },
    descriptions: {
      en: 'A worldwide index of freshwater fish habitats, migration routes, and water quality.',
      fr: 'Un index mondial des habitats de poissons d’eau douce, routes de migration et qualité de l’eau.',
      ar: 'فهرس عالمي لمواطن أسماك المياه العذبة ومسارات هجرتها وجودة المياه.'
    }
  },
  {
    id: 3,
    category: 'Climate',
    visual: 'climate',
    price: 32,
    titles: {
      en: 'When the ocean gets warmer',
      fr: "Quand l'océan se réchauffe",
      ar: 'عندما ترتفع حرارة المحيطات'
    },
    species: {
      en: 'Schooling fish',
      fr: 'Poissons de banc',
      ar: 'أسماك الأسراب'
    },
    tags: {
      en: 'Time series / 1980–2023',
      fr: 'Série temporelle / 1980–2023',
      ar: 'سلسلة زمنية / 1980–2023'
    },
    descriptions: {
      en: 'Four decades of temperature and population data for 140 pelagic species.',
      fr: 'Quatre décennies de données de température et de populations pour 140 espèces pélagiques.',
      ar: 'أربعة عقود من بيانات درجات الحرارة وتعداد 140 نوعاً من الأسماك السطحية.'
    }
  },
  {
    id: 4,
    category: 'Oceans',
    visual: 'ocean',
    price: 21,
    titles: {
      en: 'Night lights, deep fish',
      fr: 'Lumières nocturnes, faune abyssale',
      ar: 'أضواء الليل وأسماك الأعماق'
    },
    species: {
      en: 'Deep sea fish',
      fr: 'Poissons des grands fonds',
      ar: 'أسماك الأعماق السحيقة'
    },
    tags: {
      en: 'Acoustics / 2025',
      fr: 'Acoustique / 2025',
      ar: 'مسح صوتي / 2025'
    },
    descriptions: {
      en: 'Echo-sounder readings that map life in the mesopelagic zone after dark.',
      fr: 'Relevés d’écho-sondeur cartographiant la vie en zone mésopélagique après la tombée de la nuit.',
      ar: 'قراءات السونار الصوتي التي ترسم خريطة الحياة في منطقة الأعماق المتوسطة بعد حلول الظلام.'
    }
  },
  {
    id: 5,
    category: 'Freshwater',
    visual: 'fresh',
    price: 16,
    titles: {
      en: 'River giants',
      fr: 'Géants des rivières',
      ar: 'عمالقة الأنهار'
    },
    species: {
      en: 'Arapaima gigas',
      fr: 'Arapaïma géant',
      ar: 'الأربيمة النهرية'
    },
    tags: {
      en: 'Field guide / 18 rivers',
      fr: 'Guide de terrain / 18 rivières',
      ar: 'دليل ميداني / 18 نهراً'
    },
    descriptions: {
      en: 'Size, movement, and spawning records for the world’s largest freshwater fish.',
      fr: 'Taille, déplacements et données de frai pour les plus grands poissons d’eau douce du monde.',
      ar: 'سجلات الأحجام والتحركات ومواسم التكاثر لأكبر أسماك المياه العذبة في العالم.'
    }
  },
  {
    id: 6,
    category: 'Climate',
    visual: 'climate',
    price: 27,
    titles: {
      en: 'Coral recovery signals',
      fr: 'Signaux de rétablissement du corail',
      ar: 'إشارات تعافي المرجان'
    },
    species: {
      en: 'Coral reef fish',
      fr: 'Poissons de récif corallien',
      ar: 'أسماك الشعاب المرجانية'
    },
    tags: {
      en: 'Longitudinal / 2010–2024',
      fr: 'Longitudinal / 2010–2024',
      ar: 'دراسة تتبعية / 2010–2024'
    },
    descriptions: {
      en: 'A visual dataset tracking how reef communities respond after extreme heat.',
      fr: 'Un jeu de données visuel suivant la réponse des récifs après des chaleurs extrêmes.',
      ar: 'مجموعة بيانات مرئية تتبع استجابة مجتمعات الشعاب المرجانية لموجات الحر الشديدة.'
    }
  },
  {
    id: 7,
    category: 'Oceans',
    visual: 'ocean',
    price: 19,
    titles: {
      en: 'Kelp forest neighbors',
      fr: 'Voisins des forêts de varech',
      ar: 'سكان غابات عشب البحر'
    },
    species: {
      en: 'Rockfish',
      fr: 'Sébaste',
      ar: 'سمك الصخر'
    },
    tags: {
      en: 'Camera traps / 2025',
      fr: 'Pièges photographiques / 2025',
      ar: 'كاميرات المراقبة / 2025'
    },
    descriptions: {
      en: 'Daily encounters between kelp, rockfish, and the predators that shape the forest.',
      fr: 'Rencontres quotidiennes entre varech, sébastes et prédateurs façonnant la forêt.',
      ar: 'تسجيلات يومية للتفاعل بين عشب البحر وأسماك الصخر والمفترسات البحرية.'
    }
  },
  {
    id: 8,
    category: 'Freshwater',
    visual: 'fresh',
    price: 29,
    titles: {
      en: 'Salmon homeward routes',
      fr: 'Les routes de retour du saumon',
      ar: 'مسارات عودة السلمون للوطن'
    },
    species: {
      en: 'Atlantic salmon',
      fr: 'Saumon atlantique',
      ar: 'سلمون الأطلسي'
    },
    tags: {
      en: 'Telemetry / 12 seasons',
      fr: 'Télémétrie / 12 saisons',
      ar: 'تتبع عن بعد / 12 موسماً'
    },
    descriptions: {
      en: 'Tagged salmon journeys from open water back to the rivers where they began.',
      fr: 'Voyages de saumons balisés depuis la haute mer jusqu’à leurs rivières natales.',
      ar: 'رحلات السلمون المتبعة من المحيط المفتوح إلى الأنهار التي ولدوا فيها.'
    }
  },
  {
    id: 9,
    category: 'Oceans',
    visual: 'ocean',
    price: 14,
    titles: {
      en: 'The tiny fish census',
      fr: 'Le recensement des petits poissons',
      ar: 'إحصاء الأسماك الدقيقة واليرقات'
    },
    species: {
      en: 'Small schooling fish',
      fr: 'Petits poissons de banc',
      ar: 'صغار أسماك الأسراب'
    },
    tags: {
      en: 'Plankton net / 2023',
      fr: 'Filet à plancton / 2023',
      ar: 'شبكة العوالق / 2023'
    },
    descriptions: {
      en: 'A close look at larvae and small schooling fish across a coastal transect.',
      fr: 'Une étude détaillée des larves et petits poissons sur un transect côtier.',
      ar: 'نظرة دقيقة على اليرقات والأسماك الدقيقة عبر قطاع ساحلي بيئي.'
    }
  },
  {
    id: 10,
    category: 'Climate',
    visual: 'climate',
    price: 23,
    titles: {
      en: 'Mangrove nurseries',
      fr: 'Pépinières de mangroves',
      ar: 'مشاتل أشجار المانغروف'
    },
    species: {
      en: 'Mangrove Jack',
      fr: 'Vivaneau des mangroves',
      ar: 'سمك جاك المانغروف'
    },
    tags: {
      en: 'Habitat study / 2024',
      fr: 'Étude d’habitat / 2024',
      ar: 'دراسة الموطن / 2024'
    },
    descriptions: {
      en: 'Juvenile fish counts showing how mangrove roots protect young coastal life.',
      fr: 'Comptages de juvéniles montrant comment les mangroves protègent la vie côtière.',
      ar: 'إحصاءات صغار الأسماك توضح كيف تحمي جذور المانغروف الحياة الساحلية اليافعة.'
    }
  },
  {
    id: 11,
    category: 'Freshwater',
    visual: 'fresh',
    price: 17,
    titles: {
      en: 'Lake depth voices',
      fr: 'Les voix des profondeurs lacustres',
      ar: 'أصوات أعماق البحيرات'
    },
    species: {
      en: 'Wels catfish',
      fr: 'Silure glane',
      ar: 'سمك السلور الويلزي'
    },
    tags: {
      en: 'Hydrophone / 2022',
      fr: 'Hydrophone / 2022',
      ar: 'مستقبل صوت مائي / 2022'
    },
    descriptions: {
      en: 'Sound recordings and species observations from deep, quiet freshwater lakes.',
      fr: 'Enregistrements acoustiques et observations d’espèces dans des lacs profonds.',
      ar: 'تسجيلات صوتية وملاحظات لأنواع الأسماك في أعماق البحيرات العذبة الهادئة.'
    }
  },
  {
    id: 12,
    category: 'Climate',
    visual: 'climate',
    price: 34,
    titles: {
      en: 'Tuna on the move',
      fr: 'Thons en mouvement',
      ar: 'التونة في مسارات الهجرة'
    },
    species: {
      en: 'Bluefin tuna',
      fr: 'Thon rouge',
      ar: 'التونة ذات الزعانف الزرقاء'
    },
    tags: {
      en: 'Satellite tags / 2015–2024',
      fr: 'Balises satellite / 2015–2024',
      ar: 'تتبع الأقمار الصناعية / 2015–2024'
    },
    descriptions: {
      en: 'Nine years of migration, temperature, and feeding-zone data for bluefin tuna.',
      fr: 'Neuf ans de données de migration, température et zones d’alimentation pour le thon rouge.',
      ar: 'تسع سنوات من بيانات الهجرة ودرجات الحرارة ومناطق التغذية للتونة الزرقاء.'
    }
  },
  {
    id: 13,
    category: 'Oceans',
    visual: 'ocean',
    price: 15,
    titles: {
      en: 'Clownfish anemone life',
      fr: 'Vie symbiotique du poisson-clown',
      ar: 'حياة سمكة المهرج وشقائق النعمان'
    },
    species: {
      en: 'Clownfish',
      fr: 'Poisson-clown',
      ar: 'سمكة المهرج'
    },
    tags: {
      en: 'Reef behavior / 2024',
      fr: 'Comportement récifal / 2024',
      ar: 'سلوك الشعاب / 2024'
    },
    descriptions: {
      en: 'Social groups, anemone partnerships, and territory patterns of clownfish.',
      fr: 'Groupes sociaux, partenariats avec les anémones et territoires des poissons-clowns.',
      ar: 'المجموعات الاجتماعية وشراكات شقائق النعمان وأنماط السيطرة المكانية لسمكة المهرج.'
    }
  },
  {
    id: 14,
    category: 'Oceans',
    visual: 'ocean',
    price: 22,
    titles: {
      en: 'Blue tang migrations',
      fr: 'Migrations du chirurgien bleu',
      ar: 'هجرات سمكة التانج الزرقاء'
    },
    species: {
      en: 'Blue tang',
      fr: 'Chirurgien bleu',
      ar: 'سمكة التانج الزرقاء'
    },
    tags: {
      en: 'Reef telemetry / 2023',
      fr: 'Télémétrie récifale / 2023',
      ar: 'تتبع الشعاب / 2023'
    },
    descriptions: {
      en: 'Movement and feeding records for blue tang across protected tropical reefs.',
      fr: 'Données de déplacement et d’alimentation du chirurgien bleu sur les récifs protégés.',
      ar: 'سجلات الحركة والتغذية لأسماك التانج الزرقاء عبر الشعاب المرجانية الاستوائية المحمية.'
    }
  },
  {
    id: 15,
    category: 'Oceans',
    visual: 'ocean',
    price: 31,
    titles: {
      en: 'Shark nursery survey',
      fr: 'Enquête sur les nurseries de requins',
      ar: 'مسح مشاتل القروش الساحلية'
    },
    species: {
      en: 'Blacktip shark',
      fr: 'Requin à pointes noires',
      ar: 'قرش الحافة السوداء'
    },
    tags: {
      en: 'Coastal survey / 2025',
      fr: 'Enquête côtière / 2025',
      ar: 'مسح ساحلي / 2025'
    },
    descriptions: {
      en: 'Juvenile shark sightings, size measurements, and nursery habitat conditions.',
      fr: 'Observations de jeunes requins, mesures de taille et conditions des habitats de nurserie.',
      ar: 'مشاهدات صغار القروش وقياسات الأحجام وظروف الموائل الساحلية الحاضنة.'
    }
  },
  {
    id: 16,
    category: 'Oceans',
    visual: 'ocean',
    price: 18,
    titles: {
      en: 'Seahorse slow worlds',
      fr: 'Le monde secret des hippocampes',
      ar: 'العوالم الهادئة لفرس البحر'
    },
    species: {
      en: 'Seahorse',
      fr: 'Hippocampe',
      ar: 'فرس البحر'
    },
    tags: {
      en: 'Macro video / 2024',
      fr: 'Vidéo macro / 2024',
      ar: 'تصوير ماكرو / 2024'
    },
    descriptions: {
      en: 'Close-range observations of courtship, camouflage, and feeding behavior.',
      fr: 'Observations rapprochées des parades nuptiales, du camouflage et de l’alimentation.',
      ar: 'ملاحظات مقربة لسلوك التودد والتمويه والتغذية الدقيقة لفرس البحر.'
    }
  },
  {
    id: 17,
    category: 'Oceans',
    visual: 'ocean',
    price: 28,
    titles: {
      en: 'Manta ray oceanic routes',
      fr: 'Les routes océaniques des raies manta',
      ar: 'مسارات أسماك شيطان البحر (مانتا)'
    },
    species: {
      en: 'Reef manta ray',
      fr: 'Raie manta de récif',
      ar: 'شيطان البحر المرجاني'
    },
    tags: {
      en: 'Satellite tags / 2021–2025',
      fr: 'Balises satellite / 2021–2025',
      ar: 'تتبع الأقمار / 2021–2025'
    },
    descriptions: {
      en: 'Long-distance routes and cleaning-station visits of reef manta rays.',
      fr: 'Trajets longue distance et visites des stations de nettoyage des raies manta.',
      ar: 'مسارات الهجرة لمسافات طويلة وزيارات محطات التنظيف لأسماك المانتا.'
    }
  },
  {
    id: 18,
    category: 'Oceans',
    visual: 'ocean',
    price: 25,
    titles: {
      en: 'Octopus adaptive intelligence',
      fr: 'Intelligence adaptative de la pieuvre',
      ar: 'الذكاء التكيفي للأخطبوط'
    },
    species: {
      en: 'Giant Pacific octopus',
      fr: 'Pieuvre géante du Pacifique',
      ar: 'أخطبوط المحيط الهادئ'
    },
    tags: {
      en: 'Behavior study / 2024',
      fr: 'Étude de comportement / 2024',
      ar: 'دراسة سلوكية / 2024'
    },
    descriptions: {
      en: 'Problem-solving trials, den choice, and color-change observations.',
      fr: 'Essais de résolution de problèmes, choix d’abris et changements de couleur.',
      ar: 'تجارب حل المشكلات واختيار المخابئ وملاحظات التمويه وتغير الألوان.'
    }
  },
  {
    id: 19,
    category: 'Oceans',
    visual: 'ocean',
    price: 20,
    titles: {
      en: 'Penguin plunge records',
      fr: 'Plongées des manchots royaux',
      ar: 'سجلات غوص البطاريق الملكية'
    },
    species: {
      en: 'King penguin',
      fr: 'Manchot royal',
      ar: 'البطريق الملكي'
    },
    tags: {
      en: 'Dive log / 2022–2025',
      fr: 'Journal de plongée / 2022–2025',
      ar: 'سجل الغوص / 2022–2025'
    },
    descriptions: {
      en: 'Dive depth, travel speed, and feeding success from tagged penguins.',
      fr: 'Profondeur de plongée, vitesse et taux de succès de capture des proies.',
      ar: 'أعماق الغوص وسرعة الحركة ومعدلات نجاح التغذية للبطاريق المتبعة.'
    }
  },
  {
    id: 20,
    category: 'Freshwater',
    visual: 'fresh',
    price: 16,
    titles: {
      en: 'Golden river guardians',
      fr: 'Gardiens dorés des fleuves',
      ar: 'حراس الأنهار الذهبية'
    },
    species: {
      en: 'Golden dorado',
      fr: 'Dorado doré',
      ar: 'سمك الدورادو الذهبي'
    },
    tags: {
      en: 'River survey / 2023',
      fr: 'Enquête fluviale / 2023',
      ar: 'مسح نهري / 2023'
    },
    descriptions: {
      en: 'Population structure and spawning habitat for a powerful South American river fish.',
      fr: 'Structure de population et frayères d’un puissant prédateur d’Amérique du Sud.',
      ar: 'بنية التعداد ومواطن التكاثر لسمك نهري قوي في أمريكا الجنوبية.'
    }
  },
  {
    id: 21,
    category: 'Freshwater',
    visual: 'fresh',
    price: 19,
    titles: {
      en: 'The electric eel atlas',
      fr: "L'atlas de l'anguille électrique",
      ar: 'أطلس الأنقليس الكهربائي'
    },
    species: {
      en: 'Electric eel',
      fr: 'Anguille électrique',
      ar: 'الأنقليس الكهربائي'
    },
    tags: {
      en: 'Field atlas / 2024',
      fr: 'Atlas de terrain / 2024',
      ar: 'أطلس ميداني / 2024'
    },
    descriptions: {
      en: 'Electric discharge patterns, microhabitats, and seasonal activity across Amazon waterways.',
      fr: 'Décharges électriques, micro-habitats et activité saisonnière en Amazonie.',
      ar: 'أنماط التفريغ الكهربائي والموائل الدقيقة والنشاط الموسمي في حوض الأمازون.'
    }
  },
  {
    id: 22,
    category: 'Freshwater',
    visual: 'fresh',
    price: 21,
    titles: {
      en: 'Salmon spawning chronicles',
      fr: 'Chroniques du frai des saumons',
      ar: 'سجلات تكاثر السلمون الأحمر'
    },
    species: {
      en: 'Sockeye salmon',
      fr: 'Saumon rouge',
      ar: 'السلمون الأحمر'
    },
    tags: {
      en: 'Spawning survey / 2025',
      fr: 'Enquête de frai / 2025',
      ar: 'مسح التكاثر / 2025'
    },
    descriptions: {
      en: 'Run timing, body coloration changes, and stream temperatures across major tributaries.',
      fr: 'Périodes de remontée, changements de coloration et températures des cours d’eau.',
      ar: 'توقيت رحلات الصعود وتغيرات ألوان الجسم ودرجات حرارة الجداول النهرية.'
    }
  },
  {
    id: 23,
    category: 'Freshwater',
    visual: 'fresh',
    price: 12,
    titles: {
      en: 'Betta behavioral display',
      fr: 'Parades comportementales du combattant',
      ar: 'استعراضات سلوك سمكة البيتا'
    },
    species: {
      en: 'Betta fish',
      fr: 'Poisson combattant',
      ar: 'سمكة البيتا المقاتلة'
    },
    tags: {
      en: 'Behavior archive / 2023',
      fr: 'Archives de comportement / 2023',
      ar: 'أرشيف سلوكي / 2023'
    },
    descriptions: {
      en: 'Color shifts, fin spreading, and territorial dynamics in wild and captive populations.',
      fr: 'Changements de couleur, déploiement des nageoires et territorialité.',
      ar: 'تغيرات الألوان وبسط الزعانف وديناميكيات السيطرة المكانية لدى أسماك البيتا.'
    }
  },
  {
    id: 24,
    category: 'Oceans',
    visual: 'ocean',
    price: 17,
    titles: {
      en: 'Frogfish camouflage tactics',
      fr: 'Tactiques de camouflage du poisson-grenouille',
      ar: 'تكتيكات تمويه سمكة الضفدع'
    },
    species: {
      en: 'Frogfish',
      fr: 'Poisson-grenouille',
      ar: 'سمكة الضفدع'
    },
    tags: {
      en: 'Reef macro / 2024',
      fr: 'Macro récifal / 2024',
      ar: 'ماكرو الشعاب / 2024'
    },
    descriptions: {
      en: 'A visual archive of ambush positions, lure movement, and skin texture adaptation.',
      fr: 'Archive visuelle des positions d’embuscade, leurres et textures cutanées.',
      ar: 'أرشيف مرئي لمواقع الكمائن وحركات الطعم التكيفي وتغير ملمس الجلد.'
    }
  },
  {
    id: 25,
    category: 'Climate',
    visual: 'climate',
    price: 26,
    titles: {
      en: 'Whale shark plankton tracking',
      fr: 'Pistage des requins-baleines',
      ar: 'تتبع قرش الحوت وتجمعات العوالق'
    },
    species: {
      en: 'Whale shark',
      fr: 'Requin-baleine',
      ar: 'قرش الحوت'
    },
    tags: {
      en: 'Photo ID / 2018–2025',
      fr: 'Photo-identification / 2018–2025',
      ar: 'تعريف تصويري / 2018–2025'
    },
    descriptions: {
      en: 'Individual spot-pattern identification matching seasonal plankton bloom hotspots.',
      fr: 'Identification individuelle par motifs de taches lors des efflorescences planctoniques.',
      ar: 'تحديد الهوية الفردية عبر أنماط النقط تزامناً مع ازدهار العوالق الموسمية.'
    }
  },
  {
    id: 26,
    category: 'Climate',
    visual: 'climate',
    price: 14,
    titles: {
      en: 'Flying fish aerodynamic launch',
      fr: 'Aérodynamisme des poissons-volants',
      ar: 'ديناميكيات طيران الأسماك الطائرة'
    },
    species: {
      en: 'Flying fish',
      fr: 'Poisson volant',
      ar: 'السمك الطائر'
    },
    tags: {
      en: 'Surface survey / 2022',
      fr: 'Enquête de surface / 2022',
      ar: 'مسح سطحي / 2022'
    },
    descriptions: {
      en: 'Wind speed, wave height, and glide duration metrics for pelagic flying fish.',
      fr: 'Vitesse du vent, hauteur des vagues et durée de vol plané des poissons volants.',
      ar: 'مقاييس سرعة الرياح وارتفاع الأمواج ومدة التحليق الشراعي للأسماك الطائرة.'
    }
  },
  {
    id: 27,
    category: 'Oceans',
    visual: 'ocean',
    price: 24,
    titles: {
      en: 'Bioluminescent abyss',
      fr: 'Abysses bioluminescents',
      ar: 'أعماق البحار ذاتية الإضاءة'
    },
    species: {
      en: 'Frilled shark & Lanternfish',
      fr: 'Requin-lézard et poisson-lanterne',
      ar: 'القرش المزركش وأسماك الفانوس'
    },
    tags: {
      en: 'Deep net / 2024',
      fr: 'Chalut profond / 2024',
      ar: 'مسح الأعماق / 2024'
    },
    descriptions: {
      en: 'Photophore intensity and vertical diel migration records from the bathypelagic zone.',
      fr: 'Intensité des photophores et migrations verticales en zone bathypélagique.',
      ar: 'سجلات شدة الأعضاء المضيئة والهجرة العمودية اليومية في المنطقة السحيقة.'
    }
  },
  {
    id: 28,
    category: 'Oceans',
    visual: 'ocean',
    price: 18,
    titles: {
      en: 'Pufferfish geometric nests',
      fr: 'Nids géométriques du poisson-ballon',
      ar: 'الأعشاش الهندسية لسمكة الينفوخ'
    },
    species: {
      en: 'Pufferfish',
      fr: 'Poisson-ballon',
      ar: 'سمكة الينفوخ (المنفاخ)'
    },
    tags: {
      en: 'Seabed mapping / 2023',
      fr: 'Cartographie des fonds / 2023',
      ar: 'مسح قاع البحر / 2023'
    },
    descriptions: {
      en: 'Circular seabed sand garden sculptures, mate attraction, and grain size analysis.',
      fr: 'Sculptures de sable circulaires, attraction des partenaires et granulométrie.',
      ar: 'منحوتات رملية دائرية في قاع البحر لجذب الشريك مع تحليل حبيبات الرمل.'
    }
  },
  // NEW DATASETS (29 to 48)
  {
    id: 29,
    category: 'Oceans',
    visual: 'ocean',
    price: 28,
    titles: {
      en: 'Coelacanth living fossils',
      fr: 'Cœlacanthe : fossiles vivants',
      ar: 'أحافير شوكيات الجوف الحية (السيلاكانث)'
    },
    species: {
      en: 'Coelacanth (Latimeria)',
      fr: 'Cœlacanthe (Latimeria)',
      ar: 'سمكة السيلاكانث القديمة'
    },
    tags: {
      en: 'Deep submarine / 2025',
      fr: 'Sous-marin profond / 2025',
      ar: 'غواصة الأعماق / 2025'
    },
    descriptions: {
      en: 'Lobe-finned movement, cave clustering, and electro-receptive rostral organ scans from deep volcanic slopes.',
      fr: 'Nageoires lobées, rassemblements en grottes et organes électro-récepteurs sur pentes volcaniques.',
      ar: 'حركات الزعانف الفصية والتجمع في الكهوف ومسح الأعضاء الكهروحسية على المنحدرات البركانية.'
    }
  },
  {
    id: 30,
    category: 'Oceans',
    visual: 'ocean',
    price: 25,
    titles: {
      en: 'Sailfish high-speed burst',
      fr: 'Pointes de vitesse du voilier',
      ar: 'انقضاضات سمكة الشراع فائقة السرعة'
    },
    species: {
      en: 'Atlantic sailfish',
      fr: 'Espadon voilier',
      ar: 'سمكة الشراع الأطلسية'
    },
    tags: {
      en: 'High-speed sonar / 2024',
      fr: 'Sonar haute vitesse / 2024',
      ar: 'سونار فائق السرعة / 2024'
    },
    descriptions: {
      en: 'Recorded burst speeds exceeding 100 km/h, bill slashes, and cooperative schooling attacks.',
      fr: 'Vitesses de pointe dépassant 100 km/h, frappes du rostre et attaques coordonnées en banc.',
      ar: 'تسجيلات سرعات انقضاض تفوق 100 كم/ساعة، وضربات المنقار والهجمات الجماعية المنظمة.'
    }
  },
  {
    id: 31,
    category: 'Freshwater',
    visual: 'fresh',
    price: 27,
    titles: {
      en: 'Beluga sturgeon ancient giants',
      fr: 'Esturgeon béluga : géants ancestraux',
      ar: 'سمك الحفش البيلوغا العملاق'
    },
    species: {
      en: 'Beluga sturgeon (Huso huso)',
      fr: 'Esturgeon béluga (Huso huso)',
      ar: 'حفش البيلوغا (Huso huso)'
    },
    tags: {
      en: 'Basin telemetry / 2024',
      fr: 'Télémétrie de bassin / 2024',
      ar: 'تتبع الحوض النهري / 2024'
    },
    descriptions: {
      en: 'Lifespan, upstream river spawning journeys, and conservation corridors across Danube and Caspian basins.',
      fr: 'Longévité, montaison fluviale pour le frai et corridors de conservation en mer Caspienne.',
      ar: 'متوسط العمر ومسارات التكاثر في أعالي الأنهار وممرات الحماية البيئية في حوض قزوين والدانوب.'
    }
  },
  {
    id: 32,
    category: 'Oceans',
    visual: 'ocean',
    price: 30,
    titles: {
      en: 'Giant Pacific octopus maze study',
      fr: 'Labyrinthes de la pieuvre géante',
      ar: 'متاهات وذكاء أخطبوط المحيط الهادئ'
    },
    species: {
      en: 'Giant Pacific octopus',
      fr: 'Pieuvre géante du Pacifique',
      ar: 'أخطبوط الباسيفيك العملاق'
    },
    tags: {
      en: 'Cognition lab / 2025',
      fr: 'Labo de cognition / 2025',
      ar: 'مختبر الإدراك / 2025'
    },
    descriptions: {
      en: 'Spatial memory tests, tactile object classification, and suckers-driven chemical sensing telemetry.',
      fr: 'Tests de mémoire spatiale, classification tactile et détection chimique par les ventouses.',
      ar: 'اختبارات الذاكرة المكانية وتصنيف الأشياء باللمس والاستشعار الكيميائي عبر الممصات.'
    }
  },
  {
    id: 33,
    category: 'Climate',
    visual: 'climate',
    price: 21,
    titles: {
      en: 'Lionfish invasive expansion',
      fr: 'Expansion invasive de la rascasse',
      ar: 'تمدد أسماك أسد البحر الغازية'
    },
    species: {
      en: 'Red lionfish (Pterois volitans)',
      fr: 'Rascasse volante (Pterois)',
      ar: 'سمكة الأسد الحمراء'
    },
    tags: {
      en: 'Invasive tracking / 2024',
      fr: 'Suivi invasif / 2024',
      ar: 'تتبع الأنواع الغازية / 2024'
    },
    descriptions: {
      en: 'Warming water tolerance, native reef predation rates, and population density changes in the Atlantic.',
      fr: 'Tolérance au réchauffement, taux de prédation sur les récifs et densité de population.',
      ar: 'تحمل المياه الدافئة ومعدلات افتراس أسماك الشعاب المحلية وتغيرات الكثافة في الأطلسي.'
    }
  },
  {
    id: 34,
    category: 'Oceans',
    visual: 'ocean',
    price: 23,
    titles: {
      en: 'Leafy seadragon mimicry',
      fr: 'Mimétisme du dragon de mer feuillu',
      ar: 'تمويه ومحاكاة تنين البحر المورق'
    },
    species: {
      en: 'Leafy seadragon',
      fr: 'Dragon de mer feuillu',
      ar: 'تنين البحر المورق'
    },
    tags: {
      en: 'Coastal transect / 2023',
      fr: 'Transect côtier / 2023',
      ar: 'قطاع ساحلي / 2023'
    },
    descriptions: {
      en: 'Leaf appendage sway physics, kelp bed camouflage fidelity, and site fidelity in South Australia.',
      fr: 'Oscillation des appendices foliacés, fidélité au camouflage et sédentarité en Australie du Sud.',
      ar: 'فيزياء تمايل الزوائد الورقية ودقة التمويه في قيعان الأعشاب والتمسك بالموطن في جنوب أستراليا.'
    }
  },
  {
    id: 35,
    category: 'Climate',
    visual: 'climate',
    price: 33,
    titles: {
      en: 'Antarctic icefish antifreeze blood',
      fr: 'Le sang antigel du poisson des glaces',
      ar: 'دم سمكة الجليد القطبية المضاد للتجمد'
    },
    species: {
      en: 'Antarctic toothfish & Icefish',
      fr: 'Légine australe et poisson des glaces',
      ar: 'سمكة الجليد القطبية'
    },
    tags: {
      en: 'Polar polarimetry / 2025',
      fr: 'Polarimétrie polaire / 2025',
      ar: 'قياسات قطبية / 2025'
    },
    descriptions: {
      en: 'Antifreeze glycoprotein concentration, transparent blood physiology, and sub-zero survival depth metrics.',
      fr: 'Glycoprotéines antigel, sang translucide sans hémoglobine et survie sous zéro degré.',
      ar: 'تركيز البروتينات السكرية المضادة للتجمد وفسيولوجيا الدم الشفاف ومقاييس البقاء تحت الصفر.'
    }
  },
  {
    id: 36,
    category: 'Oceans',
    visual: 'ocean',
    price: 26,
    titles: {
      en: 'Goblin shark jaws & electro-sensors',
      fr: 'Requin gobelin : mâchoires et capteurs',
      ar: 'فكي ومستشعرات قرش العفريت السحيق'
    },
    species: {
      en: 'Goblin shark (Mitsukurina)',
      fr: 'Requin gobelin (Mitsukurina)',
      ar: 'قرش العفريت (Mitsukurina)'
    },
    tags: {
      en: 'Deep trench / 2024',
      fr: 'Fosse sous-marine / 2024',
      ar: 'الخنادق السحيقة / 2024'
    },
    descriptions: {
      en: 'Rapid jaw protrusion kinematic logs, ampullae of Lorenzini density, and deep benthic feeding records.',
      fr: 'Cinématique de projection ultra-rapide des mâchoires et détection électrosensorielle.',
      ar: 'حركية اندفاع الفكين فائقة السرعة وكثافة حويصلات لورنزيني للتغذية في قاع الأعماق.'
    }
  },
  {
    id: 37,
    category: 'Oceans',
    visual: 'ocean',
    price: 19,
    titles: {
      en: 'Mahi-mahi pelagic sprints',
      fr: 'Sprints pélagiques de la coryphène',
      ar: 'انطلاقات سمكة الماهي ماهي السريعة'
    },
    species: {
      en: 'Mahi-mahi (Dorado)',
      fr: 'Coryphène (Mahi-mahi)',
      ar: 'سمكة الماهي ماهي (الدورادو)'
    },
    tags: {
      en: 'Current tracking / 2024',
      fr: 'Suivi des courants / 2024',
      ar: 'تتبع التيارات البحرية / 2024'
    },
    descriptions: {
      en: 'Fast growth rates, surface flotsam association, and speed logs along warm boundary currents.',
      fr: 'Croissance rapide, association aux débris flottants et vitesses en courants chauds.',
      ar: 'معدلات النمو السريع والتجمع حول الأجسام العائمة وسجلات السرعة على طول التيارات الدافئة.'
    }
  },
  {
    id: 38,
    category: 'Oceans',
    visual: 'ocean',
    price: 36,
    titles: {
      en: 'Great white shark apex circuits',
      fr: 'Circuits du grand requin blanc',
      ar: 'مسارات القرش الأبيض الكبير'
    },
    species: {
      en: 'Great white shark',
      fr: 'Grand requin blanc',
      ar: 'القرش الأبيض الكبير'
    },
    tags: {
      en: 'Acoustic array / 2025',
      fr: 'Réseau acoustique / 2025',
      ar: 'مصفوفة صوتية / 2025'
    },
    descriptions: {
      en: 'Pelagic open-ocean journeys, seal colony hunting patrols, and seasonal temperature preferences.',
      fr: 'Traversées océaniques, patrouilles de chasse près des phoques et thermorégulation.',
      ar: 'رحلات عبر المحيط المفتوح ودوريات صيد مستعمرات الفقمة وتفضيلات درجات الحرارة الموسمية.'
    }
  },
  {
    id: 39,
    category: 'Oceans',
    visual: 'ocean',
    price: 20,
    titles: {
      en: 'Flashlight fish split-second blinks',
      fr: 'Éclats lumineux du poisson-phare',
      ar: 'وميض سمكة المصباح الفوري'
    },
    species: {
      en: 'Flashlight fish (Anomalops)',
      fr: 'Poisson-phare (Anomalops)',
      ar: 'سمكة المصباح الوامضة'
    },
    tags: {
      en: 'Night diving / 2024',
      fr: 'Plongée de nuit / 2024',
      ar: 'غوص ليلي / 2024'
    },
    descriptions: {
      en: 'Sub-ocular photophore shutters, schooling synchronization in moonless nights, and zooplankton strikes.',
      fr: 'Obturateurs de photophores, synchronisation du banc et attaques de zooplancton nocturne.',
      ar: 'إغلاق وفتح الأعضاء المضيئة تحت العين والتزامن الجماعي في الليالي المظلمة وافتراس العوالق.'
    }
  },
  {
    id: 40,
    category: 'Freshwater',
    visual: 'fresh',
    price: 22,
    titles: {
      en: 'Alligator gar river fortress',
      fr: 'Lépisosté osseux : forteresse fluviale',
      ar: 'سمكة التمساح الغار الحصينة'
    },
    species: {
      en: 'Alligator gar (Atractosteus)',
      fr: 'Lépisosté osseux (Atractosteus)',
      ar: 'سمكة الغار التمساحية'
    },
    tags: {
      en: 'Floodplain study / 2023',
      fr: 'Plaine inondable / 2023',
      ar: 'دراسة السهول الفيضية / 2023'
    },
    descriptions: {
      en: 'Heavy ganoid scale armor, vascularized swim bladder air-breathing, and bayou ambush dynamics.',
      fr: 'Écailles ganoïdes protectrices, respiration aérienne et embuscades en bayous.',
      ar: 'دروع القشور العظمية الصلبة وتنفس الهواء الجوي عبر المثانة الهوائية والكمائن في المستنقعات.'
    }
  },
  {
    id: 41,
    category: 'Oceans',
    visual: 'ocean',
    price: 29,
    titles: {
      en: 'Scalloped hammerhead seamount spirals',
      fr: 'Spirales des requins-marteaux',
      ar: 'تجمعات قرش المطرقة في الجبال البحرية'
    },
    species: {
      en: 'Scalloped hammerhead',
      fr: 'Requin-marteau halicorne',
      ar: 'قرش المطرقة المقوس'
    },
    tags: {
      en: 'Geomagnetic study / 2025',
      fr: 'Étude géomagnétique / 2025',
      ar: 'دراسة المغناطيسية الأرضية / 2025'
    },
    descriptions: {
      en: 'Geomagnetic navigation along volcanic ridges, schooling thermoregulation, and night offshore squid hunting.',
      fr: 'Navigation géomagnétique sur crêtes volcaniques et chasse nocturne de calmars.',
      ar: 'الملاحة عبر خطوط المغناطيسية الأرضية حول القمم البركانية وصيد الحبار الليلي في الأعماق.'
    }
  },
  {
    id: 42,
    category: 'Oceans',
    visual: 'ocean',
    price: 25,
    titles: {
      en: 'Napoleon wrasse coral architect',
      fr: 'Labre géant : architecte des récifs',
      ar: 'سمكة نابليون المعمارية المرجانية'
    },
    species: {
      en: 'Napoleon wrasse (Cheilinus)',
      fr: 'Labre géant / Napoléon',
      ar: 'سمكة نابليون (اللبروسية)'
    },
    tags: {
      en: 'Reef health / 2024',
      fr: 'Santé récifale / 2024',
      ar: 'صحة الشعاب / 2024'
    },
    descriptions: {
      en: 'Toxic crown-of-thorns starfish predation, coral rubble excavation, and long-term home range fidelity.',
      fr: 'Prédation sur les étoiles de mer venimeuses et fidélité au domaine vital récifal.',
      ar: 'افتراس نجم البحر الشوكي السام وحفر الركام المرجاني والتمسك بمناطق المعيشة طويلة الأمد.'
    }
  },
  {
    id: 43,
    category: 'Climate',
    visual: 'climate',
    price: 31,
    titles: {
      en: 'Vampire squid oxygen minimum survival',
      fr: 'Calmar vampire et zones d’hypoxie',
      ar: 'بقاء الحبار مصاص الدماء في نقص الأكسجين'
    },
    species: {
      en: 'Vampire squid (Vampyroteuthis)',
      fr: 'Calmar vampire',
      ar: 'الحبار مصاص الدماء'
    },
    tags: {
      en: 'Hypoxia zone / 2025',
      fr: 'Zone d’hypoxie / 2025',
      ar: 'نطاق نقص الأكسجين / 2025'
    },
    descriptions: {
      en: 'Metabolic depression in ocean oxygen minimum layers, marine snow detrital feeding, and bioluminescent tips.',
      fr: 'Métabolisme réduit en couches pauvres en oxygène et alimentation par neige marine.',
      ar: 'خفض معدل الأيض في طبقات المحيط الخالية من الأكسجين والتغذي على الثلج البحري العضوي.'
    }
  },
  {
    id: 44,
    category: 'Freshwater',
    visual: 'fresh',
    price: 18,
    titles: {
      en: 'Amazon peacock bass territory wars',
      fr: 'Guerres de territoire du tucunaré',
      ar: 'معارك النفوذ لسمكة الطاووس في الأمازون'
    },
    species: {
      en: 'Peacock bass (Cichla)',
      fr: 'Tucunaré / Peacock bass',
      ar: 'سمكة الطاووس (التوكوناري)'
    },
    tags: {
      en: 'Blackwater river / 2024',
      fr: 'Rivière d’eau noire / 2024',
      ar: 'أنهار المياه السوداء / 2024'
    },
    descriptions: {
      en: 'Visual ocelli eye-spot deterrents, explosive surface hunting, and acidic blackwater pH adaptations.',
      fr: 'Ocelles visuels défensifs, attaques explosives en surface et pH des eaux noires.',
      ar: 'البقع العينية الرادعة على الذيل وهجمات الصيد السطحية المتفجرة والتكيف مع حموضة المياه السوداء.'
    }
  },
  {
    id: 45,
    category: 'Climate',
    visual: 'climate',
    price: 12,
    titles: {
      en: 'Ocean sunfish (Mola mola) surface warming',
      fr: 'Thermorégulation du poisson-lune',
      ar: 'حمام الشمس الحراري لسمكة شمس المحيط'
    },
    species: {
      en: 'Ocean sunfish (Mola mola)',
      fr: 'Poisson-lune (Mola mola)',
      ar: 'سمكة شمس المحيط (مولا مولا)'
    },
    tags: {
      en: 'Depth logger / 2025',
      fr: 'Enregistreur de profondeur / 2025',
      ar: 'مسجل الأعماق / 2025'
    },
    descriptions: {
      en: 'Vertical oscillation between icy jellyfish hunting depths and surface sun-basking thermoregulation.',
      fr: 'Alternance entre plongées glaciales à méduses et réchauffement en surface.',
      ar: 'التنقل العمودي بين أعماق صيد قناديل البحر الباردة والطفو السطحي لامتصاص حرارة الشمس.'
    }
  },
  {
    id: 46,
    category: 'Oceans',
    visual: 'ocean',
    price: 12,
    titles: {
      en: 'Chambered nautilus buoyancy hydrostatics',
      fr: 'Hydrostatique du nautile chambré',
      ar: 'فيزياء الطفو الهيدروستاتيكي لحيوان النوتيلاس'
    },
    species: {
      en: 'Chambered nautilus',
      fr: 'Nautile chambré',
      ar: 'النوتيلاس ذو الحجرات'
    },
    tags: {
      en: 'Deep trap telemetry / 2024',
      fr: 'Pièges profonds / 2024',
      ar: 'تتبع المصائد العميقة / 2024'
    },
    descriptions: {
      en: 'Siphuncle liquid evacuation, gas chamber pressure equilibrium, and vertical daily migrations in coral drop-offs.',
      fr: 'Évacuation liquide par siphon, équilibre des gaz et montées nocturnes sur tombants.',
      ar: 'تفريغ السوائل عبر الأنبوب وتوازن ضغط غازات الحجرات والهجرة الليلية على جروف الشعاب.'
    }
  },
  {
    id: 47,
    category: 'Freshwater',
    visual: 'fresh',
    price: 12,
    titles: {
      en: 'Discus fish flooded forest breeding',
      fr: 'Reproduction des discus en igapó',
      ar: 'تكاثر سمك الديسكس في غابات الإيغابو المغمورة'
    },
    species: {
      en: 'Discus fish (Symphysodon)',
      fr: 'Discus (Symphysodon)',
      ar: 'سمك الديسكس (Symphysodon)'
    },
    tags: {
      en: 'Igapó ecology / 2023',
      fr: 'Écologie d’igapó / 2023',
      ar: 'بيئة الغابات المغمورة / 2023'
    },
    descriptions: {
      en: 'Parental epidermal mucus feeding for fry, submerged root shelter choice, and wet-season spawning triggers.',
      fr: 'Nourrissage des alevins par mucus parental, abris sous racines et saison des pluies.',
      ar: 'إفراز المخاط الجلدي المغذي للصغار واختيار جذور الأشجار الغارقة ومحفزات موسم الأمطار.'
    }
  },
  {
    id: 48,
    category: 'Climate',
    visual: 'climate',
    price: 32,
    titles: {
      en: 'Basking shark plankton corridor migrations',
      fr: 'Corridors de plancton du requin pèlerin',
      ar: 'مسارات تغذية قرش التشميس على العوالق'
    },
    species: {
      en: 'Basking shark (Cetorhinus)',
      fr: 'Requin pèlerin (Cetorhinus)',
      ar: 'قرش التشميس العملاق'
    },
    tags: {
      en: 'Thermal front / 2025',
      fr: 'Front thermique / 2025',
      ar: 'الجبهات الحرارية / 2025'
    },
    descriptions: {
      en: 'Gill-raker filter feeding volumes, thermal front aggregation tracking, and transatlantic overwintering dives.',
      fr: 'Filtration par branchiospines, agrégation sur fronts thermiques et plongées hivernales.',
      ar: 'أحجام ترشيح العوالق عبر الأسنان الخيشومية وتتبع الجبهات الحرارية والغوص الشتوي العميق.'
    }
  }
];

function getDatasetTitle(dataset) {
  const lang = getCurrentLanguage();
  return dataset.titles?.[lang] || dataset.titles?.en || dataset.title || '';
}

function getDatasetDescription(dataset) {
  const lang = getCurrentLanguage();
  return dataset.descriptions?.[lang] || dataset.descriptions?.en || dataset.description || '';
}

function getDatasetSpecies(dataset) {
  const lang = getCurrentLanguage();
  return dataset.species?.[lang] || dataset.species?.en || dataset.species || 'Fish';
}

function getDatasetTag(dataset) {
  const lang = getCurrentLanguage();
  return dataset.tags?.[lang] || dataset.tags?.en || dataset.tag || '';
}

/* =========================================================
   3. FISH PHOTOS (48 HIGH-RES COMMONS IMAGES)
   ========================================================= */


const photoUrls = {
  1: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coral_reef_at_palmyra.jpg',
  2: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_gigas.jpg',
  3: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coral_Reef_Bleaching.jpg',
  4: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Melanocetus_johnsonii_by_NOAA.jpg',
  5: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_close-up.jpg',
  6: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/CORAL_4_(34738942045).jpg',
  7: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Monterey_Bay_Aquarium_Kelp_Forest_exhibit_11.jpg',
  8: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sockeye_salmon,_Washington_(53906233586).jpg',
  9: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/School_of_small_fish_above_black_coral.jpg',
  10: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mangrove_Jack_Taiwan.jpg',
  11: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Silurus_glanis_02.jpg',
  12: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Yellowfin_tuna_nurp.jpg',
  13: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Common_clownfish.jpg',
  14: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Blue_tang_(Paracanthurus_hepatus)_01.jpg',
  15: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/White_shark.jpg',
  16: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hippocampus_kuda.jpg',
  17: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/A_Flying_Manta_ray.jpg',
  18: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pulpo_(Octopus_vulgaris),_isla_de_Mouro,_Santander,_Espa%C3%B1a,_2019-08-14,_DD_32.jpg',
  19: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Aptenodytes_patagonicus_-Moltke_Harbour%2C_South_Georgia%2C_British_Overseas_Territories%2C_UK_-seven-8.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  20: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Golden_mahseer_(Tor_putitora)_Babai_River.jpg',
  21: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Electrophorus_electricus.jpg',
  22: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmon_leaping_at_Willamette_Falls.jpg',
  23: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Male_Betta_-34245661920.jpg',
  24: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sympterichthys_politus.jpg',
  25: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Whale_Shark_(Rhincodon_typus).jpg',
  26: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vliegende_vis_(Exocoetidae).jpg',
  27: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Photostomias.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  28: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dogface_puffer_(colored).jpg',
  29: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Latimeria_chalumnae01.jpg',
  30: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/JF_avec_espadon.jpg',
  31: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Huso_huso,_Kazan_(2024-04-05)_01.jpg',
  32: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Enteroctopus_dofleini.jpg',
  33: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pterois_volitans_-_Wilhelma_01.jpg',
  34: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phycodurus_eques_P2023161.JPG',
  35: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dissostichus_mawsoni.jpg',
  36: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Goblin_shark_(Mitsukurina_owstoni).jpg',
  37: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coryphaena_hippurus.png',
  38: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/White_shark.jpg',
  39: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Velvet_Belly_Lanternshark.jpg',
  40: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Atractosteus_spatula.jpg',
  41: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sphyrna_lewini.jpg',
  42: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Napoleon_wrasse_%28Cheilinus_undulatus%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  43: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vampyroteuthis_infernalis.jpg',
  44: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cichla_ocellaris.jpg',
  45: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mola_mola.jpg',
  46: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nautilus_pompilius.jpg',
  47: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Symphysodon%20discus1.jpg',
  48: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Basking_Shark.jpg'
};
/* =========================================================
   4. PROMO / REDEEM CODES
   ========================================================= */

const paymentCodes = {
  DS10: 10,
  DS25: 25,
  DS50: 50,
  DS100: 100,

  FISH1000: 1000,
  OCEAN0025: 25,
  SWARM0075: 75,

  TAHA456: 45,
  TAHA458: 45,
  TAHA425: 25,
  TAHA100: 100,

  REEF025: 25,
  REEF050: 50,
  REEF075: 75,
  REEF100: 100,

  BLUE025: 25,
  BLUE050: 50,
  BLUE075: 75,
  BLUE100: 100,

  FISH025: 25,
  FISH050: 50,
  FISH075: 75,
  FISH150: 150,

  DATA010: 10,
  DATA025: 25,
  DATA050: 50,
  DATA100: 100,

  SWARM010: 10,
  SWARM025: 25,
  SWARM050: 50,
  SWARM100: 100,

  TAHA010: 10,
  TAHA020: 20,
  TAHA030: 30,
  TAHA040: 40,
  TAHA050: 50,
  TAHA060: 60,
  TAHA070: 70,
  TAHA080: 80,
  TAHA090: 90,
  TAHA120: 120,
  TAHA200: 200,
  TAHA250: 250,

  OCEAN010: 10,
  OCEAN050: 50,
  OCEAN100: 100,
  OCEAN200: 200,

  CORAL010: 10,
  CORAL050: 50,
  CORAL100: 100,
  CORAL200: 2000,

  ALLFISHES1000: 1000,
  NKRLAB1000: 1000,
  NKRLABTHEBEST: 1500,
  IDCABUTANYONEIAM12: 10000,
  IAMTAHAKARMANI: 1000000,
  IAMAHACKER: 1000000000000000,
  IAMAREALHACKER: -10000000000000000000000000000
};

/* =========================================================
   5. GLOBAL STATE & HELPERS
   ========================================================= */

let activeFilter = 'All';
let selectedDataset = null;

const $ = selector => document.querySelector(selector);

const money = value => `$${Number(value || 0).toLocaleString('en-US')}`;

function getBalance() {
  return Number(localStorage.getItem('dataSwarmCredits') || 0);
}

function setBalance(amount) {
  localStorage.setItem('dataSwarmCredits', String(Math.max(0, Number(amount) || 0)));
  updateBalanceDisplay();
}

function updateBalanceDisplay() {
  const balance = getBalance();

  document.querySelectorAll('#balanceDisplay, #walletBalance, #headerBalance').forEach(el => {
    el.textContent = money(balance);
  });

  const pill = $('#creditPill');
  if (pill) {
    pill.innerHTML = `${t('balance_label')} <b>${money(balance)}</b>`;
  }
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.dataSwarmToastTimer);
  window.dataSwarmToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* =========================================================
   6. DATASET GENERATORS (TXT, CSV, JSON)
   ========================================================= */

const locationList = [
  'Great Barrier Reef', 'Coral Sea', 'Pacific Ocean', 'Atlantic Ocean',
  'Indian Ocean', 'Amazon Basin', 'Mediterranean Sea', 'Caribbean Sea',
  'Monterey Bay', 'North Pacific', 'South Pacific', 'Arctic Ocean',
  'Southern Ocean', 'Red Sea', 'Gulf of Mexico', 'Caspian Sea', 'Danube Delta'
];

const habitatList = [
  'coral reef', 'open ocean', 'mangrove', 'kelp forest',
  'river', 'freshwater lake', 'estuary', 'deep sea',
  'coastal shelf', 'seagrass meadow', 'volcanic slope', 'floodplain'
];

const behaviorList = [
  'feeding', 'migration', 'resting', 'spawning',
  'schooling', 'territorial defense', 'predator avoidance', 'habitat exploration'
];

function generateDatasetText(dataset) {
  const title = getDatasetTitle(dataset);
  const desc = getDatasetDescription(dataset);
  const species = getDatasetSpecies(dataset);
  const tag = getDatasetTag(dataset);

  const lines = [
    '============================================================',
    'DATA SWARM - AQUATIC FISH DATASET',
    'Platform Created by: Taha Karmani',
    '============================================================',
    '',
    `Dataset ID: DS-${String(dataset.id).padStart(2, '0')}`,
    `Title: ${title}`,
    `Category: ${dataset.category}`,
    `Species: ${species}`,
    `Tag: ${tag}`,
    `Price: $${dataset.price}`,
    '',
    'DESCRIPTION',
    '------------------------------------------------------------',
    desc,
    '',
    'FIELD OBSERVATION TELEMETRY (250 SAMPLES)',
    '------------------------------------------------------------'
  ];

  for (let i = 1; i <= 250; i++) {
    const loc = locationList[(i + dataset.id) % locationList.length];
    const hab = habitatList[(i * 2 + dataset.id) % habitatList.length];
    const act = behaviorList[(i * 3 + dataset.id) % behaviorList.length];
    const depth = 2 + ((i * 17 + dataset.id * 9) % 520);
    const temp = (14 + ((i * 7 + dataset.id) % 150) / 10).toFixed(1);
    const len = (8 + ((i * 11 + dataset.id) % 950) / 10).toFixed(1);
    const pop = 100 + ((i * 137 + dataset.id * 53) % 18000);
    const vis = (3 + ((i * 5 + dataset.id) % 480) / 10).toFixed(1);
    const lat = (-45 + ((i * 13 + dataset.id) % 900) / 10).toFixed(2);
    const lon = (-170 + ((i * 19 + dataset.id) % 3400) / 10).toFixed(2);

    lines.push([
      `Record ${String(i).padStart(3, '0')}`,
      `Species=${species}`,
      `Location=${loc}`,
      `Habitat=${hab}`,
      `Behavior=${act}`,
      `Depth=${depth}m`,
      `WaterTemp=${temp}C`,
      `Length=${len}cm`,
      `EstPopulation=${pop}`,
      `Visibility=${vis}m`,
      `Latitude=${lat}`,
      `Longitude=${lon}`
    ].join(' | '));
  }

  lines.push(
    '',
    'DATASET NOTES',
    '------------------------------------------------------------',
    'This dataset is an authentic Data Swarm research resource.',
    'Photo reference: ' + (photoUrls[dataset.id] || 'No photo link'),
    '',
    'Created by: Taha Karmani',
    '============================================================'
  );

  return lines.join('\n');
}

function generateDatasetCSV(dataset) {
  const species = getDatasetSpecies(dataset);
  const rows = [
    ['RecordID', 'DatasetID', 'Species', 'Location', 'Habitat', 'Behavior', 'Depth_m', 'WaterTemp_C', 'Length_cm', 'EstPopulation', 'Visibility_m', 'Latitude', 'Longitude'].join(',')
  ];

  for (let i = 1; i <= 250; i++) {
    const loc = locationList[(i + dataset.id) % locationList.length];
    const hab = habitatList[(i * 2 + dataset.id) % habitatList.length];
    const act = behaviorList[(i * 3 + dataset.id) % behaviorList.length];
    const depth = 2 + ((i * 17 + dataset.id * 9) % 520);
    const temp = (14 + ((i * 7 + dataset.id) % 150) / 10).toFixed(1);
    const len = (8 + ((i * 11 + dataset.id) % 950) / 10).toFixed(1);
    const pop = 100 + ((i * 137 + dataset.id * 53) % 18000);
    const vis = (3 + ((i * 5 + dataset.id) % 480) / 10).toFixed(1);
    const lat = (-45 + ((i * 13 + dataset.id) % 900) / 10).toFixed(2);
    const lon = (-170 + ((i * 19 + dataset.id) % 3400) / 10).toFixed(2);

    rows.push([
      i,
      `"DS-${String(dataset.id).padStart(2, '0')}"`,
      `"${species}"`,
      `"${loc}"`,
      `"${hab}"`,
      `"${act}"`,
      depth,
      temp,
      len,
      pop,
      vis,
      lat,
      lon
    ].join(','));
  }

  return rows.join('\n');
}

function generateDatasetJSON(dataset) {
  const title = getDatasetTitle(dataset);
  const desc = getDatasetDescription(dataset);
  const species = getDatasetSpecies(dataset);
  const tag = getDatasetTag(dataset);

  const records = [];
  for (let i = 1; i <= 250; i++) {
    const loc = locationList[(i + dataset.id) % locationList.length];
    const hab = habitatList[(i * 2 + dataset.id) % habitatList.length];
    const act = behaviorList[(i * 3 + dataset.id) % behaviorList.length];
    const depth = 2 + ((i * 17 + dataset.id * 9) % 520);
    const temp = parseFloat((14 + ((i * 7 + dataset.id) % 150) / 10).toFixed(1));
    const len = parseFloat((8 + ((i * 11 + dataset.id) % 950) / 10).toFixed(1));
    const pop = 100 + ((i * 137 + dataset.id * 53) % 18000);
    const vis = parseFloat((3 + ((i * 5 + dataset.id) % 480) / 10).toFixed(1));
    const lat = parseFloat((-45 + ((i * 13 + dataset.id) % 900) / 10).toFixed(2));
    const lon = parseFloat((-170 + ((i * 19 + dataset.id) % 3400) / 10).toFixed(2));

    records.push({
      recordId: i,
      species,
      location: loc,
      habitat: hab,
      behavior: act,
      depth_meters: depth,
      temperature_celsius: temp,
      length_cm: len,
      estimated_population: pop,
      visibility_meters: vis,
      coordinates: { latitude: lat, longitude: lon }
    });
  }

  return JSON.stringify({
    metadata: {
      platform: 'Data Swarm',
      author: 'Taha Karmani',
      datasetId: `DS-${String(dataset.id).padStart(2, '0')}`,
      title,
      category: dataset.category,
      species,
      tag,
      priceUSD: dataset.price,
      description: desc,
      photoUrl: photoUrls[dataset.id] || null,
      sampleCount: records.length,
      generatedAt: new Date().toISOString()
    },
    observations: records
  }, null, 2);
}

/* =========================================================
   7. FILE DOWNLOAD HANDLER
   ========================================================= */

function downloadDataset(dataset, format = 'txt') {
  let content = '';
  let mimeType = 'text/plain;charset=utf-8';
  let ext = 'txt';

  if (format === 'csv') {
    content = generateDatasetCSV(dataset);
    mimeType = 'text/csv;charset=utf-8';
    ext = 'csv';
  } else if (format === 'json') {
    content = generateDatasetJSON(dataset);
    mimeType = 'application/json;charset=utf-8';
    ext = 'json';
  } else {
    content = generateDatasetText(dataset);
    mimeType = 'text/plain;charset=utf-8';
    ext = 'txt';
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  const titleSlug = (dataset.titles?.en || dataset.title || 'dataset')
    .replace(/[^a-z0-9]+/gi, '-')
    .toLowerCase();

  link.href = url;
  link.download = `Data-Swarm-DS-${String(dataset.id).padStart(2, '0')}-${titleSlug}.${ext}`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);

  savePurchasedDataset(dataset);

  const title = getDatasetTitle(dataset);
  showToast(t('download_started', { title, format: ext.toUpperCase() }));
}

/* =========================================================
   8. PURCHASED DATA PERSISTENCE
   ========================================================= */

function getPurchasedDatasets() {
  try {
    return JSON.parse(localStorage.getItem('dataSwarmPurchased') || '[]');
  } catch {
    return [];
  }
}

function savePurchasedDataset(dataset) {
  const purchased = getPurchasedDatasets();
  if (!purchased.some(item => item.id === dataset.id)) {
    purchased.push({
      id: dataset.id,
      title: dataset.titles?.en || dataset.title,
      purchasedAt: new Date().toISOString()
    });
    localStorage.setItem('dataSwarmPurchased', JSON.stringify(purchased));
  }
}

/* =========================================================
   9. CHECKOUT MODAL
   ========================================================= */

function createCheckoutModal() {
  if ($('#checkoutModal')) {
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'checkoutModal';
  modal.className = 'payment-modal-backdrop';
  modal.hidden = true;

  modal.innerHTML = `
    <section class="payment-modal" role="dialog" aria-modal="true" aria-labelledby="checkoutTitle">
      <div class="payment-modal-head">
        <div>
          <p class="eyebrow" id="checkoutEyebrow">
            ${t('checkout_eyebrow')}
          </p>
          <h2 id="checkoutTitle">
            ${t('checkout_title')}
          </h2>
        </div>

        <button id="checkoutClose" class="payment-close" type="button" aria-label="Close">×</button>
      </div>

      <div id="checkoutInfo"></div>

      <div class="wallet-balance">
        <span id="checkoutBalanceLabel">${t('checkout_balance_label')}</span>
        <strong id="checkoutBalance">$0</strong>
      </div>

      <button id="payBalanceButton" class="credit-purchase" type="button">
        ${t('checkout_pay_balance')}
      </button>

      <div class="payment-divider" id="checkoutOrDivider">
        ${t('checkout_or')}
      </div>

      <button id="payPaypalButton" class="paypal-button" type="button">
        ${t('checkout_pay_paypal')}
      </button>

      <div class="payment-divider" id="checkoutOrDivider2">
        ${t('checkout_or')}
      </div>

      <button id="payCardButton" class="payment-continue" type="button">
        ${t('checkout_pay_card')}
      </button>

      <p class="payment-secure" id="checkoutSecureNote">
        <span></span>
        ${t('checkout_secure')}
      </p>
    </section>
  `;

  document.body.appendChild(modal);

  $('#checkoutClose').addEventListener('click', closeCheckout);
  $('#payBalanceButton').addEventListener('click', payWithBalance);
  $('#payPaypalButton').addEventListener('click', () => demoExternalPayment('PayPal'));
  $('#payCardButton').addEventListener('click', () => demoExternalPayment('Bank card'));

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeCheckout();
    }
  });
}

function openCheckout(datasetId) {
  selectedDataset = datasets.find(dataset => dataset.id === datasetId);
  if (!selectedDataset) {
    return;
  }

  createCheckoutModal();

  const title = getDatasetTitle(selectedDataset);

  // Update text inside modal for current language
  const eyebrowEl = $('#checkoutEyebrow');
  if (eyebrowEl) eyebrowEl.textContent = t('checkout_eyebrow');
  const titleEl = $('#checkoutTitle');
  if (titleEl) titleEl.textContent = t('checkout_title');
  const balanceLabelEl = $('#checkoutBalanceLabel');
  if (balanceLabelEl) balanceLabelEl.textContent = t('checkout_balance_label');
  const payBalanceBtn = $('#payBalanceButton');
  if (payBalanceBtn) payBalanceBtn.textContent = t('checkout_pay_balance');
  const payPaypalBtn = $('#payPaypalButton');
  if (payPaypalBtn) payPaypalBtn.textContent = t('checkout_pay_paypal');
  const payCardBtn = $('#payCardButton');
  if (payCardBtn) payCardBtn.textContent = t('checkout_pay_card');
  const secureNote = $('#checkoutSecureNote');
  if (secureNote) secureNote.innerHTML = `<span></span>${t('checkout_secure')}`;

  const info = $('#checkoutInfo');
  info.innerHTML = `
    <p>
      <strong>${escapeHtml(title)}</strong>
    </p>
    <p>
      ${t('checkout_price')}
      <strong>${money(selectedDataset.price)}</strong>
    </p>
  `;

  $('#checkoutBalance').textContent = money(getBalance());
  $('#checkoutModal').hidden = false;
}

function closeCheckout() {
  const modal = $('#checkoutModal');
  if (modal) {
    modal.hidden = true;
  }
  selectedDataset = null;
}

function payWithBalance() {
  if (!selectedDataset) {
    return;
  }

  const balance = getBalance();
  if (balance < selectedDataset.price) {
    const diff = selectedDataset.price - balance;
    showToast(t('checkout_need_more', { amount: money(diff) }));
    return;
  }

  setBalance(balance - selectedDataset.price);
  const purchased = selectedDataset;
  closeCheckout();

  showToast(t('checkout_success'));

  setTimeout(() => {
    downloadDataset(purchased, 'txt');
  }, 350);
}

function demoExternalPayment(method) {
  if (!selectedDataset) {
    return;
  }

  const dataset = selectedDataset;
  const title = getDatasetTitle(dataset);

  const confirmed = confirm(
    t('checkout_external_demo', {
      method,
      title,
      price: money(dataset.price)
    })
  );

  if (!confirmed) {
    return;
  }

  closeCheckout();
  showToast(t('checkout_external_success', { method }));

  setTimeout(() => {
    downloadDataset(dataset, 'txt');
  }, 350);
}

/* =========================================================
   10. PRODUCT GRID RENDERING
   ========================================================= */

function renderProducts() {
  const grid = $('#productGrid');
  if (!grid) {
    return;
  }

  const searchInput = $('#searchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const visible = datasets.filter(dataset => {
    const filterOK = activeFilter === 'All' || dataset.category === activeFilter;

    const title = getDatasetTitle(dataset);
    const desc = getDatasetDescription(dataset);
    const species = getDatasetSpecies(dataset);
    const tag = getDatasetTag(dataset);

    const searchable = [
      title,
      desc,
      dataset.category,
      species,
      tag,
      dataset.titles?.en || '',
      dataset.titles?.fr || '',
      dataset.titles?.ar || '',
      dataset.species?.en || '',
      dataset.species?.fr || '',
      dataset.species?.ar || ''
    ].join(' ').toLowerCase();

    return filterOK && searchable.includes(query);
  });

  if (!visible.length) {
    grid.innerHTML = `<p class="empty-cart">${t('empty_catalog')}</p>`;
    return;
  }

  grid.innerHTML = visible.map(dataset => {
    const photo = photoUrls[dataset.id];
    const title = getDatasetTitle(dataset);
    const desc = getDatasetDescription(dataset);
    const species = getDatasetSpecies(dataset);
    const tag = getDatasetTag(dataset);

    return `
      <article class="product">
        <div class="product-visual ${dataset.visual}">
          <img
            src="${photo}"
            alt="${escapeHtml(species)} photograph"
            loading="lazy"
            decoding="async"
            class="fish-dataset-photo"
            data-id="${dataset.id}"
            onerror="this.onerror=null;this.classList.add('photo-unavailable')"
          >

          <span class="visual-label">
            ${escapeHtml(dataset.category.toUpperCase())} / DS-${String(dataset.id).padStart(2, '0')}
          </span>

          <div class="visual-shape"></div>

          <span class="photo-credit">
            ${t('photo_label')}
          </span>
        </div>

        <div class="product-body">
          <div class="product-meta">
            <span>${escapeHtml(tag)}</span>
            <span>${t('formats_label')}</span>
          </div>

          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(desc)}</p>

          <div class="product-buy">
            <span class="price">${money(dataset.price)}</span>
            <button
              class="add-button buy-button"
              type="button"
              data-id="${dataset.id}"
            >
              ${t('buy_btn')}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.fish-dataset-photo').forEach(image => {
    image.addEventListener('click', () => openPhotoPreview(image));
  });

  grid.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => openCheckout(Number(button.dataset.id)));
  });
}

/* =========================================================
   11. PHOTO PREVIEW MODAL
   ========================================================= */

function openPhotoPreview(image) {
  const preview = $('#photoPreview');
  if (!preview) {
    return;
  }

  const previewImage = $('#previewImage');
  const src = image.currentSrc || image.src;

  previewImage.src = src;
  previewImage.alt = image.alt;

  const datasetId = Number(image.dataset.id);
  const dataset = datasets.find(d => d.id === datasetId);

  const title = dataset ? getDatasetTitle(dataset) : (image.closest('.product')?.querySelector('h3')?.textContent || 'Fish photograph');

  $('#previewTitle').textContent = title;

  const sourceLink = $('#previewSource');
  if (sourceLink) {
    sourceLink.href = src;
    sourceLink.textContent = t('preview_link');
  }

  preview.hidden = false;
}

function closePhotoPreview() {
  const preview = $('#photoPreview');
  if (preview) {
    preview.hidden = true;
  }
}

/* =========================================================
   12. REDEEM CODES & PROMO SYSTEM
   ========================================================= */

function redeemCode(code) {
  const cleanCode = String(code || '').trim().toUpperCase();

  if (!cleanCode) {
    return {
      success: false,
      message: t('redeem_empty')
    };
  }

  const credits = paymentCodes[cleanCode];

  if (!credits) {
    return {
      success: false,
      message: t('redeem_invalid')
    };
  }

  const balance = getBalance();
  const newBalance = balance + Number(credits);
  setBalance(newBalance);

  return {
    success: true,
    credits,
    balance: newBalance
  };
}

function setupRedeemForm() {
  const forms = document.querySelectorAll('#redeemForm, #walletRedeemForm');

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();

      const input = form.querySelector('input');
      const status = form.querySelector('.code-status') || $('#redeemStatus');
      const result = redeemCode(input?.value);

      if (!result.success) {
        if (status) {
          status.textContent = result.message;
        }
        return;
      }

      if (status) {
        status.textContent = t('redeem_success', {
          amount: money(result.credits),
          balance: money(result.balance)
        });
      }

      if (input) {
        input.value = '';
      }

      showToast(`+${money(result.credits)} credits`);
    });
  });
}

/* =========================================================
   13. LOGIN & SESSION
   ========================================================= */

const authScreen = $('#authScreen');
const appShell = $('#appShell');
const loginForm = $('#loginForm');
const displayNameInput = $('#displayName');
const emailInput = $('#email');
const formError = $('#formError');

function normalizeName(name) {
  return String(name || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function getRegisteredNames() {
  try {
    return JSON.parse(localStorage.getItem('dataSwarmRegisteredNames') || '[]');
  } catch {
    return [];
  }
}

function registerName(name) {
  const normalized = normalizeName(name);
  const names = getRegisteredNames();

  if (names.includes(normalized)) {
    return false;
  }

  names.push(normalized);
  localStorage.setItem('dataSwarmRegisteredNames', JSON.stringify(names));
  return true;
}

function enterLibrary(name, email) {
  localStorage.setItem('dataSwarmDisplayName', name);
  localStorage.setItem('dataSwarmUser', email);

  if (authScreen) {
    authScreen.classList.add('auth-exit');
  }

  setTimeout(() => {
    if (authScreen) {
      authScreen.hidden = true;
    }
    if (appShell) {
      appShell.hidden = false;
    }
    updateBalanceDisplay();
    startSonarCircleAnimation();
  }, 420);
}

function setupLogin() {
  if (!loginForm) {
    return;
  }

  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = displayNameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';

    if (!name) {
      if (formError) {
        formError.textContent = t('login_err_name');
      }
      displayNameInput?.focus();
      return;
    }

    if (name.length < 2) {
      if (formError) {
        formError.textContent = t('login_err_name_len');
      }
      return;
    }

    if (!emailInput?.validity.valid) {
      if (formError) {
        formError.textContent = t('login_err_email');
      }
      emailInput?.focus();
      return;
    }

    const savedUser = localStorage.getItem('dataSwarmUser');
    const savedName = localStorage.getItem('dataSwarmDisplayName');

    if (
      savedUser &&
      savedName &&
      normalizeName(savedName) === normalizeName(name) &&
      savedUser.toLowerCase() === email.toLowerCase()
    ) {
      enterLibrary(name, email);
      return;
    }

    if (!registerName(name)) {
      if (formError) {
        formError.textContent = t('login_err_registered');
      }
      return;
    }

    if (formError) {
      formError.textContent = '';
    }

    enterLibrary(name, email);
  });
}

function restoreLogin() {
  const savedUser = localStorage.getItem('dataSwarmUser');
  const savedName = localStorage.getItem('dataSwarmDisplayName');

  if (savedUser) {
    enterLibrary(savedName || savedUser.split('@')[0], savedUser);
  }
}

function setupLogout() {
  const button = $('#backToLogin');
  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    localStorage.removeItem('dataSwarmUser');
    localStorage.removeItem('dataSwarmDisplayName');

    if (appShell) {
      appShell.hidden = true;
    }

    if (authScreen) {
      authScreen.hidden = false;
      authScreen.classList.remove('auth-exit');
    }

    if (displayNameInput) displayNameInput.value = '';
    if (emailInput) emailInput.value = '';
    displayNameInput?.focus();
  });
}

/* =========================================================
   14. WELCOME EMAIL
   ========================================================= */

function setupWelcomeEmail() {
  const button = $('#welcomeEmailButton');
  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    const email = localStorage.getItem('dataSwarmUser');
    if (!email) {
      showToast(t('toast_signin_first'));
      return;
    }

    const name = localStorage.getItem('dataSwarmDisplayName') || 'friend';
    const subject = encodeURIComponent('Welcome to Data Swarm');
    const body = encodeURIComponent(
      `Hi ${name},\n\n` +
      `Welcome to Data Swarm, your aquatic and fish data library.\n\n` +
      `Explore 48 comprehensive datasets across Oceans, Freshwater, and Climate.\n\n` +
      `Created by Taha Karmani.\n\n` +
      `See you in the water!`
    );

    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
    showToast(t('toast_welcome_sent', { email }));
  });
}

/* =========================================================
   15. SEARCH & FILTER EVENTS
   ========================================================= */

function setupSearchAndFilters() {
  $('#searchInput')?.addEventListener('input', renderProducts);

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'All';

      document.querySelectorAll('.filter').forEach(filter => {
        filter.classList.toggle('active', filter === button);
      });

      renderProducts();
    });
  });
}

/* =========================================================
   16. PHOTO MODAL EVENTS
   ========================================================= */

function setupPhotoModal() {
  $('#closePhotoPreview')?.addEventListener('click', closePhotoPreview);

  $('#photoPreview')?.addEventListener('click', event => {
    if (event.target.id === 'photoPreview') {
      closePhotoPreview();
    }
  });
}

/* =========================================================
   17. BALANCE WALLET MODAL
   ========================================================= */

function createWalletModal() {
  if ($('#walletModal')) {
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'walletModal';
  modal.className = 'credits-modal-backdrop';
  modal.hidden = true;

  modal.innerHTML = `
    <section class="credits-modal">
      <div class="payment-modal-head">
        <div>
          <p class="eyebrow">${t('wallet_eyebrow')}</p>
          <h2>${t('wallet_title')}</h2>
        </div>
        <button id="walletClose" class="payment-close" type="button">×</button>
      </div>

      <div class="wallet-balance">
        <span>${t('wallet_available')}</span>
        <strong id="walletBalance">$0</strong>
      </div>

      <label class="wallet-label" for="walletCode">
        ${t('wallet_redeem_label')}
      </label>

      <form id="walletRedeemForm">
        <div class="page-redeem-row">
          <input
            id="walletCode"
            type="text"
            placeholder="${t('wallet_code_ph')}"
            autocomplete="off"
            required
          >
          <button type="submit">
            ${t('wallet_redeem_btn')}
          </button>
        </div>
        <p class="code-status" id="walletStatus"></p>
      </form>
    </section>
  `;

  document.body.appendChild(modal);

  $('#walletClose').addEventListener('click', () => {
    modal.hidden = true;
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.hidden = true;
    }
  });

  setupRedeemForm();
}

function setupBalanceButton() {
  createWalletModal();

  const button = $('#creditPill');
  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    updateBalanceDisplay();
    const modal = $('#walletModal');
    if (modal) {
      modal.hidden = false;
    }
  });
}

/* =========================================================
   18. SWARM CANVAS ANIMATION
   ========================================================= */

function setupSwarm() {
  const canvas = $('#swarmCanvas');
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }

  const swarm = Array.from({ length: 28 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    vx: 0,
    vy: 0,
    size: 5 + Math.random() * 4,
    phase: index * 0.7,
    tint: index % 4
  }));

  const pointer = {
    x: 0.5,
    y: 0.5
  };

  function resizeSwarm() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  window.addEventListener('resize', resizeSwarm);

  window.addEventListener('pointermove', event => {
    pointer.x = event.clientX / window.innerWidth;
    pointer.y = event.clientY / window.innerHeight;
  });

  function drawSwarm(time) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    context.clearRect(0, 0, width, height);

    swarm.forEach(fish => {
      const targetX = pointer.x * width + Math.cos(time / 900 + fish.phase) * 75;
      const targetY = pointer.y * height + Math.sin(time / 1100 + fish.phase) * 60;

      fish.vx += (targetX - fish.x * width) * 0.00018;
      fish.vy += (targetY - fish.y * height) * 0.00018;

      fish.vx *= 0.96;
      fish.vy *= 0.96;

      fish.x += fish.vx / width;
      fish.y += fish.vy / height;

      const angle = Math.atan2(fish.vy, fish.vx) || fish.phase;
      const size = fish.size;
      const colors = ['#f6cf69', '#e8b85c', '#9bd1bd', '#f08b6d'];
      const bodyColor = colors[fish.tint];

      context.save();
      context.translate(fish.x * width, fish.y * height);
      context.rotate(angle);

      context.globalAlpha = 0.9;
      context.shadowColor = 'rgba(4,27,27,.28)';
      context.shadowBlur = size * 0.8;
      context.shadowOffsetY = size * 0.35;

      context.fillStyle = bodyColor;
      context.beginPath();
      context.moveTo(size * 2.25, 0);
      context.bezierCurveTo(size * 1.3, -size * 1.15, -size * 0.65, -size * 1.05, -size * 1.55, 0);
      context.bezierCurveTo(-size * 0.65, size * 1.05, size * 1.3, size * 1.15, size * 2.25, 0);
      context.fill();

      context.shadowColor = 'transparent';
      context.beginPath();
      context.moveTo(-size * 1.25, 0);
      context.lineTo(-size * 2.65, -size * 1.2);
      context.lineTo(-size * 2.4, 0);
      context.lineTo(-size * 2.65, size * 1.2);
      context.closePath();
      context.fill();

      // Eye
      context.fillStyle = '#16483f';
      context.beginPath();
      context.arc(size * 1.42, -size * 0.25, Math.max(1, size * 0.18), 0, Math.PI * 2);
      context.fill();

      context.fillStyle = '#fff';
      context.beginPath();
      context.arc(size * 1.47, -size * 0.3, Math.max(0.5, size * 0.07), 0, Math.PI * 2);
      context.fill();

      context.restore();
    });

    requestAnimationFrame(drawSwarm);
  }

  resizeSwarm();
  requestAnimationFrame(drawSwarm);
}

/* =========================================================
   19. SONAR FLOATING ANIMATION
   ========================================================= */

function startSonarCircleAnimation() {
  const circles = document.querySelectorAll('.hero-art .fish, .hero-art .depth');

  circles.forEach((circle, index) => {
    const distance = 6 + (index % 4) * 3;
    const duration = 2000 + index * 400;
    const delay = -(index * 300);

    circle.animate([
      { transform: 'translateY(0px)' },
      { transform: `translateY(-${distance}px)` },
      { transform: 'translateY(0px)' },
      { transform: `translateY(${distance}px)` },
      { transform: 'translateY(0px)' }
    ], {
      duration,
      delay,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  });
}

/* =========================================================
   20. PURCHASED DOWNLOAD LIBRARY MODAL
   ========================================================= */

function createLibraryButton() {
  const topbar = document.querySelector('.topbar');
  if (!topbar || $('#libraryButton')) {
    return;
  }

  const actions = topbar.querySelector('.session-actions');
  if (!actions) {
    return;
  }

  const button = document.createElement('button');
  button.id = 'libraryButton';
  button.type = 'button';
  button.textContent = t('btn_my_downloads');

  button.addEventListener('click', showDownloadLibrary);
  actions.insertBefore(button, actions.firstChild);
}

function showDownloadLibrary() {
  const purchased = getPurchasedDatasets();
  const existing = $('#downloadLibraryModal');
  if (existing) {
    existing.remove();
  }

  const modal = document.createElement('div');
  modal.id = 'downloadLibraryModal';
  modal.className = 'download-library-backdrop';

  const rows = purchased.length
    ? purchased.map(item => {
      const dataset = datasets.find(d => d.id === item.id);
      if (!dataset) return '';
      const title = getDatasetTitle(dataset);

      return `
          <div class="download-row">
            <div>
              <strong>${escapeHtml(title)}</strong>
              <small>DS-${String(dataset.id).padStart(2, '0')}</small>
            </div>
            <div class="download-actions" style="display: flex; gap: 6px;">
              <button type="button" data-download-id="${dataset.id}" data-format="txt">TXT</button>
              <button type="button" data-download-id="${dataset.id}" data-format="csv">CSV</button>
              <button type="button" data-download-id="${dataset.id}" data-format="json">JSON</button>
            </div>
          </div>
        `;
    }).join('')
    : `<p>${t('library_empty')}</p>`;

  modal.innerHTML = `
    <section class="download-library" role="dialog" aria-modal="true" style="max-width: 520px; width: min(520px, 100%); background: var(--paper); padding: 32px; box-shadow: 0 25px 90px rgba(0,20,35,.35);">
      <div class="download-library-head" style="display: flex; justify-content: space-between; align-items: start; border-bottom: 1px solid var(--line); padding-bottom: 20px; margin-bottom: 20px;">
        <div>
          <p class="eyebrow">${t('library_eyebrow')}</p>
          <h2 style="margin: 0; font-size: 28px;">${t('library_title')}</h2>
        </div>
        <button class="download-close payment-close" id="downloadLibraryClose" type="button" style="font-size: 26px; border: 0; background: none; cursor: pointer;">×</button>
      </div>

      <p class="download-library-intro" style="color: var(--muted); font-size: 13px; margin-bottom: 24px;">
        ${t('library_intro')}
      </p>

      <div class="download-list" style="display: flex; flex-direction: column; gap: 12px; max-height: 50vh; overflow-y: auto;">
        ${rows}
      </div>
    </section>
  `;

  document.body.appendChild(modal);

  $('#downloadLibraryClose')?.addEventListener('click', () => modal.remove());

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.remove();
    }
  });

  modal.querySelectorAll('[data-download-id]').forEach(button => {
    button.addEventListener('click', () => {
      const dataset = datasets.find(d => d.id === Number(button.dataset.downloadId));
      const format = button.dataset.format || 'txt';
      if (dataset) {
        downloadDataset(dataset, format);
      }
    });
  });
}

/* =========================================================
   21. BRAND & FOOTER
   ========================================================= */

function updateBrandText() {
  document.querySelectorAll('.topbar .brand, .auth-brand').forEach(brand => {
    const titleSpan = brand.querySelector('[data-i18n="app_title"]');
    if (titleSpan) {
      titleSpan.textContent = t('app_title');
    }
  });

  const libraryBtn = $('#libraryButton');
  if (libraryBtn) {
    libraryBtn.textContent = t('btn_my_downloads');
  }

  const welcomeBtn = $('#welcomeEmailButton');
  if (welcomeBtn) {
    welcomeBtn.textContent = t('btn_welcome_email');
  }

  const logoutBtn = $('#backToLogin');
  if (logoutBtn) {
    logoutBtn.textContent = t('btn_logout');
  }
}

/* =========================================================
   22. KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') {
    return;
  }

  closePhotoPreview();
  closeCheckout();

  const wallet = $('#walletModal');
  if (wallet) {
    wallet.hidden = true;
  }

  const library = $('#downloadLibraryModal');
  if (library) {
    library.remove();
  }
});

/* =========================================================
   23. INITIALIZATION
   ========================================================= */

function initializeDataSwarm() {
  // 1. Setup Language
  setLanguage(currentLang);
  setupLanguagePickers();

  // 2. Setup Components & Events
  setupRedeemForm();
  setupLogin();
  setupLogout();
  setupWelcomeEmail();
  setupSearchAndFilters();
  setupPhotoModal();
  setupSwarm();
  setupBalanceButton();
  createLibraryButton();

  // 3. Render Catalog & Update Displays
  renderProducts();
  updateBalanceDisplay();
  updateBrandText();

  // 4. Start Animations
  startSonarCircleAnimation();

  // 5. Restore Previous Login
  restoreLogin();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDataSwarm);
} else {
  initializeDataSwarm();
}
