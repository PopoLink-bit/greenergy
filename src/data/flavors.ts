export interface GreenergyProduct {
  id: string;
  bigText: string;
  name: string;
  tagline: string;
  category: string;
  subtitle: string;
  price: string;
  priceValue: number;
  weight: string;
  bgColor: string;
  bgHex: string;
  textColor: string;
  accentColor: string;
  blurOrbColor: string;
  productBoxImage: string;
  thumbImage: string;
  backgroundImage: string;
  mobileBackgroundImage: string;
  opticalScale?: number;
  opticalOffsetY?: string;
  badge: string;
  targetUrl: string;
  tasteNotes: string[];
  nutrition: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
    fiber: string;
  };
  ingredients: string[];
  floatingItems: {
    id: string;
    name: string;
    image: string;
    x: number;
    y: number;
    size: number;
    rotation: number;
    zIndex: number;
    floatDelay: number;
    floatSpeed: number;
    blur?: number;
  }[];
}

// 1. FAVA BEANS CHIPS (4 Products — Energetic Advertising Campaign Order)
export const FAVA_BEANS_PRODUCTS: GreenergyProduct[] = [
  {
    id: 'fava-beans-tomato-basil',
    bigText: 'TOMATO',
    name: 'Tomato & Basil',
    tagline: 'SUN-RIPENED ITALIAN TOMATOES AND SWEET GENOVESE BASIL.',
    category: 'Italian & Fresh',
    subtitle: 'Sun-dried tomatoes, fresh Genovese basil, a drizzle of olive oil, and a crispy crunch.',
    price: '€4.50',
    priceValue: 19.5,
    weight: '60 g',
    bgColor: '#FF5A47',
    bgHex: '#FF5A47',
    textColor: '#4A0805',
    accentColor: '#E93F32',
    blurOrbColor: 'rgba(255, 148, 125, 0.45)',
    productBoxImage: '/products/fava-beans/fava-beans-chips-tomato-basil.webp',
    thumbImage: '/products/fava-beans/fava-beans-chips-tomato-basil.webp',
    backgroundImage: '/backgrounds/energetic/tomato-basil-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/tomato-basil-mobile.webp',
    opticalScale: 1.06,
    opticalOffsetY: '0%',
    badge: '🌿 Sun-Dried Tomatoes & Genovese Basil',
    targetUrl: '/products/tomato-basil',
    tasteNotes: ['San Marzano Tomatoes', 'Fresh Genovese Basil', 'Extra Virgin Olive Oil', 'Sea Salt'],
    nutrition: {
      calories: 268,
      protein: '14.0 g',
      fat: '7.4 g',
      carbs: '34.0 g',
      fiber: '8.6 g'
    },
    ingredients: [
      'Hulled fava beans',
      'Dried ground tomatoes',
      'Dried Genovese basil',
      'Dried garlic',
      'Extra Virgin olive oil',
      'Sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'fava-beans-chili-lemon',
    bigText: 'CHILI',
    name: 'Chili & Lemon',
    tagline: 'CRISPY FAVA BEANS WITH FIERY CAYENNE CHILI, JUICY LEMON, AND A MEXICAN TWIST.',
    category: 'Fiery & Citrus',
    subtitle: 'Crisp roasted fava beans with bold cayenne chili, ripe lemon zest, and pink sea salt.',
    price: '€4.50',
    priceValue: 19.5,
    weight: '60 g',
    bgColor: '#FFD41F',
    bgHex: '#FFD41F',
    textColor: '#5C0B06',
    accentColor: '#D92C22',
    blurOrbColor: 'rgba(255, 240, 120, 0.45)',
    productBoxImage: '/products/fava-beans/fava-beans-chips-chili-lemon.webp',
    thumbImage: '/products/fava-beans/fava-beans-chips-chili-lemon.webp',
    backgroundImage: '/backgrounds/energetic/chili-lemon-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/chili-lemon-mobile.webp',
    opticalScale: 1.06,
    opticalOffsetY: '0%',
    badge: '🌶️ Mexican Crunch',
    targetUrl: '/products/chili-lemon',
    tasteNotes: ['Fiery Cayenne Chili', 'Fresh Lemon & Lime', 'Crispy Fava Beans', 'Sea Salt'],
    nutrition: {
      calories: 275,
      protein: '14.2 g',
      fat: '7.8 g',
      carbs: '34.5 g',
      fiber: '8.4 g'
    },
    ingredients: [
      'Selected fava beans (Vicia faba)',
      'Natural spicy cayenne chili pepper',
      'Dried lemon zest and lime juice',
      'High-oleic sunflower oil',
      'Pink sea salt',
      'Paprika extract'
    ],
    floatingItems: []
  },
  {
    id: 'fava-beans-sweet-herbs-olives',
    bigText: 'OLIVES',
    name: 'Sweet Herbs & Olives',
    tagline: 'MEDITERRANEAN HERBS, BLACK OLIVES, AND FRESH AROMA IN EVERY CRISPY BITE.',
    category: 'Mediterranean & Herbal',
    subtitle: 'Crispy fava beans with a bouquet of aromatic Mediterranean herbs, olive notes, and sea salt.',
    price: '€4.50',
    priceValue: 19.5,
    weight: '60 g',
    bgColor: '#48C0EB',
    bgHex: '#48C0EB',
    textColor: '#062C3D',
    accentColor: '#347B48',
    blurOrbColor: 'rgba(155, 228, 255, 0.45)',
    productBoxImage: '/products/fava-beans/fava-beans-chips-sweet-herbs-olives.webp',
    thumbImage: '/products/fava-beans/fava-beans-chips-sweet-herbs-olives.webp',
    backgroundImage: '/backgrounds/energetic/sweet-herbs-olives-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/sweet-herbs-olives-mobile.webp',
    opticalScale: 1.06,
    opticalOffsetY: '0%',
    badge: '🫒 Herbs & Black Olives',
    targetUrl: '/products/sweet-herbs-olives',
    tasteNotes: ['Smoked Mediterranean Herbs', 'Black Olives', 'Rosemary & Thyme', 'Sea Salt'],
    nutrition: {
      calories: 270,
      protein: '14.5 g',
      fat: '7.5 g',
      carbs: '33.8 g',
      fiber: '8.8 g'
    },
    ingredients: [
      'Whole fava bean kernels',
      'Mediterranean herbs (rosemary, thyme, oregano)',
      'Black olive extract',
      'Garlic and onion',
      'Sunflower oil',
      'Sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'fava-beans-honey-mustard',
    bigText: 'HONEY',
    name: 'Honey & Mustard',
    tagline: 'NATURAL WILD HONEY AND DIJON MUSTARD PAIRED WITH CRISPY FAVA BEANS.',
    category: 'Sweet & Tangy',
    subtitle: 'Aromatic wildflower honey, French Dijon mustard seeds, and a perfect crunch.',
    price: '€4.50',
    priceValue: 19.5,
    weight: '60 g',
    bgColor: '#F5B824',
    bgHex: '#F5B824',
    textColor: '#4E2302',
    accentColor: '#B98227',
    blurOrbColor: 'rgba(255, 229, 143, 0.45)',
    productBoxImage: '/products/fava-beans/fava-beans-chips-honey-mustard.webp',
    thumbImage: '/products/fava-beans/fava-beans-chips-honey-mustard.webp',
    backgroundImage: '/backgrounds/energetic/honey-mustard-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/honey-mustard-mobile.webp',
    opticalScale: 1.06,
    opticalOffsetY: '0%',
    badge: '🍯 Wild Honey & Dijon Mustard',
    targetUrl: '/products/honey-mustard',
    tasteNotes: ['Natural Wild Honey', 'French Dijon Mustard', 'Golden Fava Beans', 'Subtle Caramel'],
    nutrition: {
      calories: 280,
      protein: '13.8 g',
      fat: '8.2 g',
      carbs: '36.0 g',
      fiber: '8.0 g'
    },
    ingredients: [
      'Selected fava beans',
      'Natural bee honey',
      'Yellow and black mustard seeds',
      'Natural apple cider vinegar',
      'Cold-pressed sunflower oil',
      'Sea salt'
    ],
    floatingItems: []
  }
];

// 2. CHICKPEA PROTEIN SNACKS (2 Products)
export const CHICKPEA_SNACKS_PRODUCTS: GreenergyProduct[] = [
  {
    id: 'chickpea-lemon-pepper',
    bigText: 'LEMON',
    name: 'Chickpea Lemon & Pepper',
    tagline: 'ROASTED CHICKPEAS WITH A ZESTY LEMON TWIST AND COARSE BLACK PEPPER.',
    category: 'Citrus & Pepper',
    subtitle: 'Crunchy chickpeas rich in plant protein and fiber, seasoned with fresh lemon and aromatic pepper.',
    price: '€3.90',
    priceValue: 16.5,
    weight: '50 g',
    bgColor: '#FFD11A',
    bgHex: '#FFD11A',
    textColor: '#3B2602',
    accentColor: '#A87003',
    blurOrbColor: 'rgba(255, 244, 148, 0.45)',
    productBoxImage: '/products/chickpea-protein-snacks/chickpea-protein-snack-lemon-pepper.webp',
    thumbImage: '/products/chickpea-protein-snacks/chickpea-protein-snack-lemon-pepper.webp',
    backgroundImage: '/backgrounds/energetic/chickpea-lemon-pepper-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/chickpea-lemon-pepper-mobile.webp',
    opticalScale: 1.0,
    opticalOffsetY: '0%',
    badge: '🍋 Lemon & Black Pepper',
    targetUrl: '/products/chickpea-lemon-pepper',
    tasteNotes: ['Roasted Chickpeas', 'Zesty Lemon', 'Coarsely Ground Black Pepper', 'Sea Salt'],
    nutrition: {
      calories: 245,
      protein: '12.5 g',
      fat: '6.2 g',
      carbs: '31.0 g',
      fiber: '9.0 g'
    },
    ingredients: [
      'Chickpeas (Cicer arietinum)',
      'High-oleic sunflower oil',
      'Natural lemon flavor',
      'Coarse ground black pepper',
      'Sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'chickpea-salted',
    bigText: 'SALT',
    name: 'Chickpea Sea Salted',
    tagline: 'CLASSIC ROASTED CHICKPEAS WITH FINE CRYSTAL SEA SALT.',
    category: 'Classic & Salted',
    subtitle: 'Clean ingredients, crisp roasted chickpeas with a pinch of natural sea salt.',
    price: '€3.90',
    priceValue: 16.5,
    weight: '50 g',
    bgColor: '#23A8E0',
    bgHex: '#23A8E0',
    textColor: '#05283B',
    accentColor: '#095A82',
    blurOrbColor: 'rgba(158, 230, 255, 0.45)',
    productBoxImage: '/products/chickpea-protein-snacks/chickpea-protein-snack-salted.webp',
    thumbImage: '/products/chickpea-protein-snacks/chickpea-protein-snack-salted.webp',
    backgroundImage: '/backgrounds/energetic/chickpea-salted-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/chickpea-salted-mobile.webp',
    opticalScale: 1.0,
    opticalOffsetY: '0%',
    badge: '🧂 Sea Salt & Pure Chickpeas',
    targetUrl: '/products/chickpea-salted',
    tasteNotes: ['Crunchy Chickpeas', 'Pure Sea Salt', 'Sunflower Oil', 'Nutty Finish'],
    nutrition: {
      calories: 240,
      protein: '12.8 g',
      fat: '6.0 g',
      carbs: '30.5 g',
      fiber: '9.2 g'
    },
    ingredients: [
      'Organic roasted chickpeas',
      'Cold-pressed sunflower oil',
      'Fine sea salt'
    ],
    floatingItems: []
  }
];

// 3. PROTEIN COOKIES (3 Products in one category)
export const PROTEIN_COOKIES_PRODUCTS: GreenergyProduct[] = [
  {
    id: 'protein-cookies-apple-cinnamon',
    bigText: 'APPLE',
    name: 'Apple & Cinnamon',
    tagline: 'SOFT PROTEIN COOKIE WITH JUICY APPLE AND WARM CINNAMON.',
    category: 'Plant-Based Protein',
    subtitle: 'Delightful combination of sweet apple and warm cinnamon, perfect for a comforting and satisfying treat.',
    price: '€3.50',
    priceValue: 14.9,
    weight: '75 g',
    bgColor: '#E04836',
    bgHex: '#E04836',
    textColor: '#3E0A04',
    accentColor: '#AD2415',
    blurOrbColor: 'rgba(255, 160, 122, 0.45)',
    productBoxImage: '/products/protein-cookies/protein-cookies-apple-cinnamon.webp',
    thumbImage: '/products/protein-cookies/protein-cookies-apple-cinnamon.webp',
    backgroundImage: '/backgrounds/energetic/cookie-apple-cinnamon-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/cookie-apple-cinnamon-mobile.webp',
    opticalScale: 1.05,
    opticalOffsetY: '0%',
    badge: '🍎 Apple & Cinnamon',
    targetUrl: '/products/cookie-apple-cinnamon',
    tasteNotes: ['Ripe Organic Apple', 'Ceylon Cinnamon', 'Velvety Dates', 'Gluten-Free Oats'],
    nutrition: {
      calories: 275,
      protein: '20.0 g',
      fat: '9.8 g',
      carbs: '26.2 g',
      fiber: '7.5 g'
    },
    ingredients: [
      'Plant protein blend (pea, rice) 32%',
      'Organic dried apples 24%',
      'Gluten-free oat flour 18%',
      'Chicory root fiber',
      'Ground Ceylon cinnamon 4%',
      'Sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'protein-cookies-double-chocolate',
    bigText: 'CHOCOLATE',
    name: 'Double Chocolate',
    tagline: 'RICH DARK CHOCOLATE WITH RAW CACAO NIBS AND PLANT-BASED PROTEIN.',
    category: 'Plant-Based Protein',
    subtitle: 'Real Belgian cocoa, crunchy raw chocolate drops, cashew nuts, and plant protein.',
    price: '€3.50',
    priceValue: 14.9,
    weight: '75 g',
    bgColor: '#3B1D12',
    bgHex: '#3B1D12',
    textColor: '#FFF5EB',
    accentColor: '#C87D4B',
    blurOrbColor: 'rgba(166, 99, 60, 0.45)',
    productBoxImage: '/products/protein-cookies/protein-cookies-double-chocolate.webp',
    thumbImage: '/products/protein-cookies/protein-cookies-double-chocolate.webp',
    backgroundImage: '/backgrounds/energetic/cookie-double-chocolate-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/cookie-double-chocolate-mobile.webp',
    opticalScale: 1.05,
    opticalOffsetY: '0%',
    badge: '🍫 Double Chocolate',
    targetUrl: '/products/cookie-double-chocolate',
    tasteNotes: ['Belgian Cocoa 70%', 'Raw Cacao Nibs', 'Pink Himalayan Salt', 'Almond Butter'],
    nutrition: {
      calories: 285,
      protein: '20.0 g',
      fat: '11.2 g',
      carbs: '24.5 g',
      fiber: '7.8 g'
    },
    ingredients: [
      'Pea and rice protein isolate 30%',
      'Sugar-free dark chocolate 22%',
      'Almond flour 18%',
      'Chicory root fiber',
      'Virgin cocoa butter',
      'Sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'protein-cookies-creamy-butter-graham',
    bigText: 'CREAMY',
    name: 'Creamy Butter + Graham',
    tagline: 'BUTTERY GRAHAM COOKIE WITH BOURBON VANILLA AND PLANT-BASED PROTEIN.',
    category: 'Plant-Based Protein',
    subtitle: 'Smooth buttery flavor, toasted graham grains, natural Bourbon vanilla, and clean plant proteins.',
    price: '€3.50',
    priceValue: 14.9,
    weight: '75 g',
    bgColor: '#D99B4E',
    bgHex: '#D99B4E',
    textColor: '#3D2206',
    accentColor: '#8F5819',
    blurOrbColor: 'rgba(255, 229, 180, 0.45)',
    productBoxImage: '/products/protein-cookies/protein-cookies-creamy-butter-graham.webp',
    thumbImage: '/products/protein-cookies/protein-cookies-creamy-butter-graham.webp',
    backgroundImage: '/backgrounds/energetic/cookie-coming-soon-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/cookie-coming-soon-mobile.webp',
    opticalScale: 1.05,
    opticalOffsetY: '0%',
    badge: '🧈 Creamy Butter + Graham',
    targetUrl: '/products/cookie-creamy-butter-graham',
    tasteNotes: ['Natural Plant Butter', 'Golden Graham', 'Bourbon Vanilla', 'Gluten-Free Oats'],
    nutrition: {
      calories: 280,
      protein: '20.0 g',
      fat: '10.5 g',
      carbs: '25.0 g',
      fiber: '7.6 g'
    },
    ingredients: [
      'Pea and rice protein isolate 31%',
      'Gluten-free graham flour 22%',
      'Natural plant-based butter flavor',
      'Bourbon vanilla extract',
      'Chicory root fiber',
      'Sea salt'
    ],
    floatingItems: []
  }
];

// 4. BLACK SERIES (4 Products: Red Thai, Sweet Mustard, Salt & Vinegar, Black Truffle)
export const BLACK_SERIES_PRODUCTS: GreenergyProduct[] = [
  {
    id: 'peanuts-fava-red-thai',
    bigText: 'THAI',
    name: 'Red Thai',
    tagline: 'EXOTIC RED THAI CURRY, ROASTED PEANUTS, AND CRUNCHY FAVA BEANS.',
    category: 'Spicy & Exotic',
    subtitle: 'Protein blend of crunchy peanuts and crispy fava bean chips with a fiery Red Thai curry kick.',
    price: '€4.20',
    priceValue: 17.5,
    weight: '70 g',
    bgColor: '#D9231E',
    bgHex: '#D9231E',
    textColor: '#FFF6F2',
    accentColor: '#FF4B38',
    blurOrbColor: 'rgba(255, 133, 99, 0.45)',
    productBoxImage: '/products/peanuts-fava/peanuts-fava-beans-red-thai.webp',
    thumbImage: '/products/peanuts-fava/peanuts-fava-beans-red-thai.webp',
    backgroundImage: '/backgrounds/energetic/peanuts-red-thai-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/peanuts-red-thai-mobile.webp',
    opticalScale: 1.04,
    opticalOffsetY: '0%',
    badge: '🌶️ Fiery Red Thai & Peanuts',
    targetUrl: '/products/peanuts-fava-red-thai',
    tasteNotes: ['Roasted Peanuts', 'Crispy Fava Beans', 'Red Thai Curry', 'Lime & Chili'],
    nutrition: {
      calories: 345,
      protein: '16.8 g',
      fat: '19.5 g',
      carbs: '22.0 g',
      fiber: '7.5 g'
    },
    ingredients: [
      'Roasted peanuts (56%)',
      'Roasted fava beans (32%)',
      'Sunflower oil',
      'Red Thai curry seasoning (paprika, chili, coriander, ginger)',
      'Sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'peanuts-fava-sweet-mustard',
    bigText: 'MUSTARD',
    name: 'Sweet Mustard',
    tagline: 'SWEET HONEY MUSTARD, GOLDEN PEANUTS, AND CRUNCHY FAVA BEAN CHIPS.',
    category: 'Sweet & Mustard',
    subtitle: 'Crunchy mix of peanuts and fava beans in a bold sweet honey mustard with herbal notes.',
    price: '€4.20',
    priceValue: 17.5,
    weight: '70 g',
    bgColor: '#F2B418',
    bgHex: '#F2B418',
    textColor: '#472103',
    accentColor: '#A86A08',
    blurOrbColor: 'rgba(255, 232, 138, 0.45)',
    productBoxImage: '/products/peanuts-fava/peanuts-fava-beans-sweet-mustard.webp',
    thumbImage: '/products/peanuts-fava/peanuts-fava-beans-sweet-mustard.webp',
    backgroundImage: '/backgrounds/energetic/peanuts-sweet-mustard-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/peanuts-sweet-mustard-mobile.webp',
    opticalScale: 1.04,
    opticalOffsetY: '0%',
    badge: '🟡 Sweet Mustard & Peanuts',
    targetUrl: '/products/peanuts-fava-sweet-mustard',
    tasteNotes: ['Peanuts', 'Fava Bean Chips', 'Sweet Mustard', 'Honey & Mustard Seeds'],
    nutrition: {
      calories: 340,
      protein: '16.5 g',
      fat: '19.0 g',
      carbs: '23.0 g',
      fiber: '7.4 g'
    },
    ingredients: [
      'Peanuts (56%)',
      'Fava beans (32%)',
      'Sunflower oil',
      'Aromatic sweet mustard (mustard, apple cider vinegar, natural honey flavor)',
      'Sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'peanuts-fava-salt-vinegar',
    bigText: 'VINEGAR',
    name: 'Salt & Vinegar',
    tagline: 'TANGY MALT VINEGAR, ROASTED PEANUTS, CRISP CHICKPEAS, AND SEA SALT.',
    category: 'Tangy & Zesty',
    subtitle: 'Protein blend of crunchy peanuts, crispy chickpeas, and toasted corn with sharp vinegar and sea salt.',
    price: '€4.20',
    priceValue: 17.5,
    weight: '70 g',
    bgColor: '#008EC4',
    bgHex: '#008EC4',
    textColor: '#FFFFFF',
    accentColor: '#00B4D8',
    blurOrbColor: 'rgba(0, 180, 216, 0.45)',
    productBoxImage: '/products/peanuts-fava/greenergy-black-series-salt-vinegar.webp',
    thumbImage: '/products/peanuts-fava/greenergy-black-series-salt-vinegar.webp',
    backgroundImage: '/backgrounds/energetic/peanuts-salt-vinegar-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/peanuts-salt-vinegar-mobile.webp',
    opticalScale: 1.04,
    opticalOffsetY: '0%',
    badge: '🌊 Tangy Salt & Vinegar',
    targetUrl: '/products/peanuts-fava-salt-vinegar',
    tasteNotes: ['Crisp Sea Salt', 'Tangy Malt Vinegar', 'Roasted Peanuts', 'Golden Corn'],
    nutrition: {
      calories: 340,
      protein: '17.0 g',
      fat: '18.5 g',
      carbs: '24.0 g',
      fiber: '7.8 g'
    },
    ingredients: [
      'Roasted peanuts (48%)',
      'Roasted chickpeas (26%)',
      'Toasted corn (18%)',
      'Sunflower oil',
      'Natural vinegar seasoning',
      'Pink sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'peanuts-fava-black-truffle',
    bigText: 'TRUFFLE',
    name: 'Black Truffle',
    tagline: 'AROMATIC BLACK TRUFFLE, CRUNCHY ROASTED PEANUTS, CHICKPEAS, AND CORN.',
    category: 'Gourmet & Truffle',
    subtitle: 'Decadent mix of roasted peanuts, crispy chickpeas, and toasted corn infused with rich black truffle essence.',
    price: '€4.50',
    priceValue: 18.5,
    weight: '70 g',
    bgColor: '#8A581E',
    bgHex: '#8A581E',
    textColor: '#FFF9F0',
    accentColor: '#E5B842',
    blurOrbColor: 'rgba(229, 184, 66, 0.40)',
    productBoxImage: '/products/peanuts-fava/greenergy-black-series-black-truffle.webp',
    thumbImage: '/products/peanuts-fava/greenergy-black-series-black-truffle.webp',
    backgroundImage: '/backgrounds/energetic/peanuts-black-truffle-desktop.webp',
    mobileBackgroundImage: '/backgrounds/energetic/peanuts-black-truffle-mobile.webp',
    opticalScale: 1.04,
    opticalOffsetY: '0%',
    badge: '🍄 Gourmet Black Truffle',
    targetUrl: '/products/peanuts-fava-black-truffle',
    tasteNotes: ['Aromatic Black Truffle', 'Roasted Peanuts', 'Crunchy Chickpeas', 'Flaky Sea Salt'],
    nutrition: {
      calories: 345,
      protein: '17.0 g',
      fat: '19.0 g',
      carbs: '23.0 g',
      fiber: '7.6 g'
    },
    ingredients: [
      'Roasted peanuts (48%)',
      'Roasted chickpeas (26%)',
      'Toasted corn (18%)',
      'Sunflower oil',
      'Natural black truffle seasoning',
      'Sea salt'
    ],
    floatingItems: []
  },
  {
    id: 'peanuts-fava-green-wasabi',
    bigText: 'WASABI',
    name: 'Green Wasabi',
    tagline: 'FRESH WASABI HEAT, ROASTED PEANUTS, CRUNCHY CHICKPEAS, AND CORN.',
    category: 'Fresh & Sharp',
    subtitle: 'A bold roasted protein mix with a fresh wasabi kick and a sharp Japanese-inspired finish.',
    price: '€4.20',
    priceValue: 17.5,
    weight: '70 g',
    bgColor: '#103E22',
    bgHex: '#103E22',
    textColor: '#F2FFF5',
    accentColor: '#4ADE80',
    blurOrbColor: 'rgba(74, 222, 128, 0.40)',
    productBoxImage: '/products/peanuts-fava/green-wasabi-pack.png',
    thumbImage: '/products/peanuts-fava/green-wasabi-pack.png',
    backgroundImage: '/backgrounds/energetic/green-wasabi-desktop-bg.webp',
    mobileBackgroundImage: '/backgrounds/energetic/green-wasabi-mobile-bg.webp',
    opticalScale: 1.04,
    opticalOffsetY: '0%',
    badge: '🟢 Bold Green Wasabi',
    targetUrl: '/products/peanuts-fava-green-wasabi',
    tasteNotes: ['Fresh Wasabi', 'Roasted Peanuts', 'Crunchy Chickpeas', 'Toasted Corn'],
    nutrition: {
      calories: 340,
      protein: '17.0 g',
      fat: '18.0 g',
      carbs: '24.0 g',
      fiber: '7.8 g'
    },
    ingredients: [],
    floatingItems: []
  },
  {
    id: 'peanuts-fava-ciao-italia',
    bigText: 'ITALIA',
    name: 'Ciao Italia',
    tagline: 'ITALIAN-INSPIRED AROMA, ROASTED PEANUTS, CRUNCHY CHICKPEAS, CORN, AND A SUBTLE CAPPUCCINO FINISH.',
    category: 'Aromatic & Gourmet',
    subtitle: 'An aromatic Italian-inspired protein mix with a refined cappuccino touch.',
    price: '€4.20',
    priceValue: 17.5,
    weight: '70 g',
    bgColor: '#422919',
    bgHex: '#422919',
    textColor: '#FFF8F0',
    accentColor: '#E6A76E',
    blurOrbColor: 'rgba(230, 167, 110, 0.40)',
    productBoxImage: '/products/peanuts-fava/ciao-italia-pack.png',
    thumbImage: '/products/peanuts-fava/ciao-italia-pack.png',
    backgroundImage: '/backgrounds/energetic/ciao-italia-desktop-bg.webp',
    mobileBackgroundImage: '/backgrounds/energetic/ciao-italia-mobile-bg.webp',
    opticalScale: 1.04,
    opticalOffsetY: '0%',
    badge: '🇮🇹 Aromatic Ciao Italia',
    targetUrl: '/products/peanuts-fava-ciao-italia',
    tasteNotes: ['Aromatic Herbs', 'Cappuccino Touch', 'Roasted Peanuts', 'Toasted Corn'],
    nutrition: {
      calories: 345,
      protein: '17.0 g',
      fat: '18.5 g',
      carbs: '23.5 g',
      fiber: '7.5 g'
    },
    ingredients: [],
    floatingItems: []
  }
];

// Backwards compatibility aliases
export const PEANUTS_FAVA_PRODUCTS = BLACK_SERIES_PRODUCTS;
export const GREENERGY_PRODUCTS = FAVA_BEANS_PRODUCTS;
export const RAW_BALLS_PRODUCTS = CHICKPEA_SNACKS_PRODUCTS;
export const PRE_WORKOUT_PRODUCTS = BLACK_SERIES_PRODUCTS;
export const SNACK_FLAVORS = FAVA_BEANS_PRODUCTS as unknown as import('../types').SnackFlavor[];
