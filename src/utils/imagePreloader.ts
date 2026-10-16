import {
  FAVA_BEANS_PRODUCTS,
  CHICKPEA_SNACKS_PRODUCTS,
  PROTEIN_COOKIES_PRODUCTS,
  PEANUTS_FAVA_PRODUCTS,
  BLACK_SERIES_PRODUCTS,
  GreenergyProduct,
} from '../data/flavors';
import { INTRO_BACKDROP_DATA_URI } from '../assets/introBackdropAsset';

const decodedUrls = new Set<string>();
const inflightPromises = new Map<string, Promise<void>>();

export const ALL_COLLECTION_PRODUCTS: GreenergyProduct[] = [
  ...FAVA_BEANS_PRODUCTS,
  ...CHICKPEA_SNACKS_PRODUCTS,
  ...PROTEIN_COOKIES_PRODUCTS,
  ...BLACK_SERIES_PRODUCTS,
];

export const EDITORIAL_CLEAN_CAMPAIGN_BG =
  '/backgrounds/greenergy-intro-bg.webp';

export const EDITORIAL_CLEAN_CAMPAIGN_BG_JPG =
  '/backgrounds/greenergy-intro-bg.jpg';

export const EDITORIAL_CLEAN_CAMPAIGN_BG_SVG =
  '/backgrounds/greenergy-intro-bg.svg';

export const EDITORIAL_CLEAN_CAMPAIGN_BG_FALLBACK = INTRO_BACKDROP_DATA_URI;

/**
 * Returns the .jpg fallback path in /backgrounds/ for any .webp background URL.
 */
export const getBackgroundFallbackUrl = (url: string): string => {
  if (!url) return '';
  if (url.endsWith('.webp')) {
    return url.slice(0, -5) + '.jpg';
  }
  return url;
};

/**
 * Preloads a single image and decodes it into memory for zero-jank rendering.
 */
export const preloadImage = (
  url: string,
  priority: 'high' | 'auto' | 'low' = 'auto'
): Promise<void> => {
  if (!url || decodedUrls.has(url)) return Promise.resolve();

  const existing = inflightPromises.get(url);
  if (existing) return existing;

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    if ('fetchPriority' in img) {
      (img as HTMLImageElement & { fetchPriority: string }).fetchPriority = priority;
    }

    const markDone = () => {
      decodedUrls.add(url);
      inflightPromises.delete(url);
      resolve();
    };

    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().then(markDone).catch(markDone);
      } else {
        markDone();
      }
    };

    img.onerror = () => {
      markDone();
    };

    img.src = url;
  });

  inflightPromises.set(url, promise);
  return promise;
};

/**
 * Synchronous check whether an asset URL has already been decoded into memory.
 */
export const isAssetDecoded = (url: string): boolean => {
  return Boolean(url && decodedUrls.has(url));
};

/**
 * Helper to pick the active background URL for the current device orientation.
 */
const getViewportBackgroundUrl = (product: GreenergyProduct): string => {
  const isVertical =
    typeof window !== 'undefined' &&
    (window.innerWidth < 768 || window.innerHeight > window.innerWidth * 1.05);
  return isVertical
    ? product.mobileBackgroundImage || product.backgroundImage
    : product.backgroundImage;
};

/**
 * Preload all GREENERGY product packshots and their viewport-matched energetic campaign
 * backgrounds for the 3-stage circular showcase & floating family intro sequence.
 */
export const preloadIntroCollectionPackshots = (): Promise<void[]> => {
  const promises: Promise<void>[] = [];

  // High-priority preload for the 4 Fava Beans scenes first (first beats of Stage 1)
  FAVA_BEANS_PRODUCTS.forEach((product) => {
    promises.push(preloadImage(product.productBoxImage, 'high'));
    promises.push(preloadImage(getViewportBackgroundUrl(product), 'high'));
  });

  // Immediately preload the remaining category packshots and backgrounds for Stage 1 & Stage 2
  ALL_COLLECTION_PRODUCTS.forEach((p) => {
    if (!p.id.startsWith('fava-beans-') && p.id !== 'protein-cookies-creamy-butter-graham') {
      promises.push(preloadImage(p.productBoxImage, 'high'));
      promises.push(preloadImage(getViewportBackgroundUrl(p), 'auto'));
    }
  });

  return Promise.all(promises);
};

/**
 * Ensures the main product packshot and viewport-matching background
 * are decoded before transitioning to prevent any white flash or empty frame.
 */
export const preloadProduct = (
  product: GreenergyProduct,
  priority: 'high' | 'auto' | 'low' = 'auto'
): Promise<void[]> => {
  const promises: Promise<void>[] = [];

  if (product.productBoxImage) {
    promises.push(preloadImage(product.productBoxImage, priority));
  }

  const bgUrl = getViewportBackgroundUrl(product);
  if (bgUrl) {
    promises.push(preloadImage(bgUrl, priority));
  }

  return Promise.all(promises);
};

/**
 * Waits for the hero packshot of the target product to decode,
 * capped with a short safety timeout so interaction always feels instantaneous.
 */
export const ensureProductReady = async (product: GreenergyProduct): Promise<void> => {
  if (isAssetDecoded(product.productBoxImage)) {
    return;
  }

  const timeoutPromise = new Promise<void>((resolve) => setTimeout(resolve, 90));
  await Promise.race([
    preloadProduct(product, 'high').then(() => undefined),
    timeoutPromise,
  ]);
};

/**
 * Smart preloader:
 * 1. Immediately preloads & decodes all 4 Fava Beans packshots and energetic backgrounds
 *    for the 4-scene commercial intro and initial interactive gallery.
 * 2. Preloads adjacent products and categories.
 */
export const initializeImagePreloader = () => {
  const currentProduct = FAVA_BEANS_PRODUCTS[0];
  const nextProduct = FAVA_BEANS_PRODUCTS[1];
  const prevProduct = FAVA_BEANS_PRODUCTS[FAVA_BEANS_PRODUCTS.length - 1];

  Promise.all([
    preloadIntroCollectionPackshots(),
    preloadProduct(currentProduct, 'high'),
  ]).then(() => {
    if (nextProduct) preloadProduct(nextProduct, 'high');
    if (prevProduct && prevProduct.id !== nextProduct?.id) {
      preloadProduct(prevProduct, 'auto');
    }
  });
};
