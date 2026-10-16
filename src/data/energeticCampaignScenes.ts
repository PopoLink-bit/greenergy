export type EnergeticEntranceVariant =
  | 'rise-overshoot'
  | 'slide-right-rotate'
  | 'rise-scale-soft'
  | 'diagonal-rotate';

export type EnergeticExitVariant =
  | 'exit-left'
  | 'exit-up-left'
  | 'exit-left-soft'
  | 'exit-settle';

export type ColorWipeDirection =
  | 'none'
  | 'from-right'
  | 'from-bottom'
  | 'from-diagonal';

export interface EnergeticProductSceneConfig {
  productId: string;
  name: string;
  productBoxImage: string;
  desktopBackground: string;
  mobileBackground: string;
  desktopObjectPosition?: string;
  mobileObjectPosition?: string;
  primaryBgColor: string;
  secondaryHighlightColor: string;
  accentColor: string;
  textColor: string;
  isDarkScene?: boolean;
  entranceVariant: EnergeticEntranceVariant;
  exitVariant: EnergeticExitVariant;
  wipeDirection: ColorWipeDirection;
  sceneDurationMs: number;
}

/**
 * Client-approved configuration for the four Fava Beans advertising scenes
 * and the choreographed opening sequence.
 */
export const ENERGETIC_FAVA_SCENES: EnergeticProductSceneConfig[] = [
  {
    productId: 'fava-beans-tomato-basil',
    name: 'Tomato & Basil',
    productBoxImage: '/products/fava-beans/fava-beans-chips-tomato-basil.webp',
    desktopBackground: '/backgrounds/energetic/tomato-basil-desktop.webp',
    mobileBackground: '/backgrounds/energetic/tomato-basil-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center 54%',
    primaryBgColor: '#FF5A47',
    secondaryHighlightColor: '#FF947D',
    accentColor: '#E93F32',
    textColor: '#4A0805',
    isDarkScene: false,
    entranceVariant: 'rise-overshoot',
    exitVariant: 'exit-left',
    wipeDirection: 'none',
    sceneDurationMs: 1150,
  },
  {
    productId: 'fava-beans-chili-lemon',
    name: 'Chili & Lemon',
    productBoxImage: '/products/fava-beans/fava-beans-chips-chili-lemon.webp',
    desktopBackground: '/backgrounds/energetic/chili-lemon-desktop.webp',
    mobileBackground: '/backgrounds/energetic/chili-lemon-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center 52%',
    primaryBgColor: '#FFD41F',
    secondaryHighlightColor: '#FFF078',
    accentColor: '#D92C22',
    textColor: '#5C0B06',
    isDarkScene: false,
    entranceVariant: 'slide-right-rotate',
    exitVariant: 'exit-up-left',
    wipeDirection: 'from-right',
    sceneDurationMs: 1150,
  },
  {
    productId: 'fava-beans-sweet-herbs-olives',
    name: 'Sweet Herbs & Olives',
    productBoxImage: '/products/fava-beans/fava-beans-chips-sweet-herbs-olives.webp',
    desktopBackground: '/backgrounds/energetic/sweet-herbs-olives-desktop.webp',
    mobileBackground: '/backgrounds/energetic/sweet-herbs-olives-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center 54%',
    primaryBgColor: '#48C0EB',
    secondaryHighlightColor: '#9BE4FF',
    accentColor: '#347B48',
    textColor: '#062C3D',
    isDarkScene: false,
    entranceVariant: 'rise-scale-soft',
    exitVariant: 'exit-left-soft',
    wipeDirection: 'from-bottom',
    sceneDurationMs: 1150,
  },
  {
    productId: 'fava-beans-honey-mustard',
    name: 'Honey & Mustard',
    productBoxImage: '/products/fava-beans/fava-beans-chips-honey-mustard.webp',
    desktopBackground: '/backgrounds/energetic/honey-mustard-desktop.webp',
    mobileBackground: '/backgrounds/energetic/honey-mustard-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center 54%',
    primaryBgColor: '#F5B824',
    secondaryHighlightColor: '#FFE58F',
    accentColor: '#B98227',
    textColor: '#4E2302',
    isDarkScene: false,
    entranceVariant: 'diagonal-rotate',
    exitVariant: 'exit-settle',
    wipeDirection: 'from-diagonal',
    sceneDurationMs: 1250,
  },
];

/**
 * Full 11-product energetic advertising campaign scene configurations
 * across all four GREENERGY product categories.
 */
export const ENERGETIC_ALL_PRODUCT_SCENES: EnergeticProductSceneConfig[] = [
  ...ENERGETIC_FAVA_SCENES,
  // 5. CHICKPEA SNACKS — SALTED
  {
    productId: 'chickpea-salted',
    name: 'Chickpea Sea Salted',
    productBoxImage: '/products/chickpea-protein-snacks/chickpea-protein-snack-salted.webp',
    desktopBackground: '/backgrounds/energetic/chickpea-salted-desktop.webp',
    mobileBackground: '/backgrounds/energetic/chickpea-salted-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#23A8E0',
    secondaryHighlightColor: '#9EE6FF',
    accentColor: '#095A82',
    textColor: '#05283B',
    isDarkScene: false,
    entranceVariant: 'rise-overshoot',
    exitVariant: 'exit-left',
    wipeDirection: 'from-right',
    sceneDurationMs: 1150,
  },
  // 6. CHICKPEA SNACKS — LEMON PEPPER
  {
    productId: 'chickpea-lemon-pepper',
    name: 'Chickpea Lemon & Pepper',
    productBoxImage: '/products/chickpea-protein-snacks/chickpea-protein-snack-lemon-pepper.webp',
    desktopBackground: '/backgrounds/energetic/chickpea-lemon-pepper-desktop.webp',
    mobileBackground: '/backgrounds/energetic/chickpea-lemon-pepper-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#FFD11A',
    secondaryHighlightColor: '#FFF494',
    accentColor: '#A87003',
    textColor: '#3B2602',
    isDarkScene: false,
    entranceVariant: 'slide-right-rotate',
    exitVariant: 'exit-up-left',
    wipeDirection: 'from-right',
    sceneDurationMs: 1150,
  },
  // 7. PROTEIN COOKIES — DOUBLE CHOCOLATE
  {
    productId: 'protein-cookies-double-chocolate',
    name: 'Double Chocolate',
    productBoxImage: '/products/protein-cookies/protein-cookies-double-chocolate.webp',
    desktopBackground: '/backgrounds/energetic/cookie-double-chocolate-desktop.webp',
    mobileBackground: '/backgrounds/energetic/cookie-double-chocolate-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#3B1D12',
    secondaryHighlightColor: '#A6633C',
    accentColor: '#C87D4B',
    textColor: '#FFF5EB',
    isDarkScene: true,
    entranceVariant: 'rise-scale-soft',
    exitVariant: 'exit-left-soft',
    wipeDirection: 'from-bottom',
    sceneDurationMs: 1150,
  },
  // 8. PROTEIN COOKIES — APPLE & CINNAMON
  {
    productId: 'protein-cookies-apple-cinnamon',
    name: 'Apple & Cinnamon',
    productBoxImage: '/products/protein-cookies/protein-cookies-apple-cinnamon.webp',
    desktopBackground: '/backgrounds/energetic/cookie-apple-cinnamon-desktop.webp',
    mobileBackground: '/backgrounds/energetic/cookie-apple-cinnamon-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#E04836',
    secondaryHighlightColor: '#FFA07A',
    accentColor: '#AD2415',
    textColor: '#3E0A04',
    isDarkScene: false,
    entranceVariant: 'rise-overshoot',
    exitVariant: 'exit-left',
    wipeDirection: 'from-right',
    sceneDurationMs: 1150,
  },
  // 9. PROTEIN COOKIES — COMING SOON (Creamy Butter + Graham)
  {
    productId: 'protein-cookies-creamy-butter-graham',
    name: 'Creamy Butter + Graham',
    productBoxImage: '/products/protein-cookies/protein-cookies-creamy-butter-graham.webp',
    desktopBackground: '/backgrounds/energetic/cookie-coming-soon-desktop.webp',
    mobileBackground: '/backgrounds/energetic/cookie-coming-soon-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#D99B4E',
    secondaryHighlightColor: '#FFE5B4',
    accentColor: '#8F5819',
    textColor: '#3D2206',
    isDarkScene: false,
    entranceVariant: 'diagonal-rotate',
    exitVariant: 'exit-settle',
    wipeDirection: 'from-diagonal',
    sceneDurationMs: 1150,
  },
  // 10. BLACK SERIES — RED THAI
  {
    productId: 'peanuts-fava-red-thai',
    name: 'Red Thai Black Series',
    productBoxImage: '/products/peanuts-fava/peanuts-fava-beans-red-thai.webp',
    desktopBackground: '/backgrounds/energetic/peanuts-red-thai-desktop.webp',
    mobileBackground: '/backgrounds/energetic/peanuts-red-thai-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#D9231E',
    secondaryHighlightColor: '#FF8563',
    accentColor: '#FF4B38',
    textColor: '#FFF6F2',
    isDarkScene: true,
    entranceVariant: 'slide-right-rotate',
    exitVariant: 'exit-up-left',
    wipeDirection: 'from-right',
    sceneDurationMs: 1150,
  },
  // 11. BLACK SERIES — SWEET MUSTARD
  {
    productId: 'peanuts-fava-sweet-mustard',
    name: 'Sweet Mustard Black Series',
    productBoxImage: '/products/peanuts-fava/peanuts-fava-beans-sweet-mustard.webp',
    desktopBackground: '/backgrounds/energetic/peanuts-sweet-mustard-desktop.webp',
    mobileBackground: '/backgrounds/energetic/peanuts-sweet-mustard-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#F2B418',
    secondaryHighlightColor: '#FFE88A',
    accentColor: '#A86A08',
    textColor: '#472103',
    isDarkScene: false,
    entranceVariant: 'diagonal-rotate',
    exitVariant: 'exit-settle',
    wipeDirection: 'from-diagonal',
    sceneDurationMs: 1150,
  },
  // 12. BLACK SERIES — SALT & VINEGAR
  {
    productId: 'peanuts-fava-salt-vinegar',
    name: 'Salt & Vinegar Black Series',
    productBoxImage: '/products/peanuts-fava/greenergy-black-series-salt-vinegar.webp',
    desktopBackground: '/backgrounds/energetic/peanuts-salt-vinegar-desktop.webp',
    mobileBackground: '/backgrounds/energetic/peanuts-salt-vinegar-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#008EC4',
    secondaryHighlightColor: '#7DD3FC',
    accentColor: '#00B4D8',
    textColor: '#FFFFFF',
    isDarkScene: true,
    entranceVariant: 'rise-overshoot',
    exitVariant: 'exit-left',
    wipeDirection: 'from-right',
    sceneDurationMs: 1150,
  },
  // 13. BLACK SERIES — BLACK TRUFFLE
  {
    productId: 'peanuts-fava-black-truffle',
    name: 'Black Truffle Black Series',
    productBoxImage: '/products/peanuts-fava/greenergy-black-series-black-truffle.webp',
    desktopBackground: '/backgrounds/energetic/peanuts-black-truffle-desktop.webp',
    mobileBackground: '/backgrounds/energetic/peanuts-black-truffle-mobile.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#8A581E',
    secondaryHighlightColor: '#F5D78E',
    accentColor: '#E5B842',
    textColor: '#FFF9F0',
    isDarkScene: true,
    entranceVariant: 'rise-scale-soft',
    exitVariant: 'exit-left-soft',
    wipeDirection: 'from-bottom',
    sceneDurationMs: 1150,
  },
  // 14. BLACK SERIES — GREEN WASABI
  {
    productId: 'peanuts-fava-green-wasabi',
    name: 'Green Wasabi Black Series',
    productBoxImage: '/products/peanuts-fava/green-wasabi-pack.png',
    desktopBackground: '/backgrounds/energetic/green-wasabi-desktop-bg.webp',
    mobileBackground: '/backgrounds/energetic/green-wasabi-mobile-bg.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#103E22',
    secondaryHighlightColor: '#86EFAC',
    accentColor: '#4ADE80',
    textColor: '#F2FFF5',
    isDarkScene: true,
    entranceVariant: 'slide-right-rotate',
    exitVariant: 'exit-up-left',
    wipeDirection: 'from-right',
    sceneDurationMs: 1150,
  },
  // 15. BLACK SERIES — CIAO ITALIA
  {
    productId: 'peanuts-fava-ciao-italia',
    name: 'Ciao Italia Black Series',
    productBoxImage: '/products/peanuts-fava/ciao-italia-pack.png',
    desktopBackground: '/backgrounds/energetic/ciao-italia-desktop-bg.webp',
    mobileBackground: '/backgrounds/energetic/ciao-italia-mobile-bg.webp',
    desktopObjectPosition: 'center center',
    mobileObjectPosition: 'center center',
    primaryBgColor: '#422919',
    secondaryHighlightColor: '#FDE68A',
    accentColor: '#E6A76E',
    textColor: '#FFF8F0',
    isDarkScene: true,
    entranceVariant: 'diagonal-rotate',
    exitVariant: 'exit-settle',
    wipeDirection: 'from-diagonal',
    sceneDurationMs: 1150,
  },
];

export const ENERGETIC_SCENE_BY_ID: Record<string, EnergeticProductSceneConfig> =
  ENERGETIC_ALL_PRODUCT_SCENES.reduce((acc, scene) => {
    acc[scene.productId] = scene;
    return acc;
  }, {} as Record<string, EnergeticProductSceneConfig>);

export const isEnergeticFavaProduct = (productId: string): boolean =>
  Boolean(ENERGETIC_SCENE_BY_ID[productId]);

export const isDarkBackgroundProduct = (productId: string): boolean =>
  Boolean(ENERGETIC_SCENE_BY_ID[productId]?.isDarkScene);
