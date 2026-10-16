import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GreenergyProduct } from '../data/flavors';
import {
  ENERGETIC_SCENE_BY_ID,
  isEnergeticFavaProduct,
  isDarkBackgroundProduct,
} from '../data/energeticCampaignScenes';
import { preloadImage, getBackgroundFallbackUrl } from '../utils/imagePreloader';

interface ProductBackgroundSceneProps {
  currentProduct: GreenergyProduct;
  adjacentProducts?: GreenergyProduct[];
}

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const ProductBackgroundScene: React.FC<ProductBackgroundSceneProps> = React.memo(
  ({ currentProduct, adjacentProducts = [] }) => {
    const [isVerticalViewport, setIsVerticalViewport] = useState<boolean>(() => {
      if (typeof window === 'undefined') return false;
      return window.innerWidth < 768 || window.innerHeight > window.innerWidth * 1.05;
    });
    const [failedUrls, setFailedUrls] = useState<Record<string, boolean>>({});

    useEffect(() => {
      let rafId: number | null = null;
      const onResize = () => {
        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          if (typeof window === 'undefined') return;
          setIsVerticalViewport(
            window.innerWidth < 768 || window.innerHeight > window.innerWidth * 1.05
          );
        });
      };
      window.addEventListener('resize', onResize, { passive: true });
      return () => {
        if (rafId !== null) cancelAnimationFrame(rafId);
        window.removeEventListener('resize', onResize);
      };
    }, []);

    const energeticScene = ENERGETIC_SCENE_BY_ID[currentProduct.id];
    const isEnergeticScene = isEnergeticFavaProduct(currentProduct.id);
    const isDarkScene = isDarkBackgroundProduct(currentProduct.id);

    const desktopBg = energeticScene?.desktopBackground || currentProduct.backgroundImage;
    const mobileBg =
      energeticScene?.mobileBackground ||
      currentProduct.mobileBackgroundImage ||
      currentProduct.backgroundImage;

    const primaryBackgroundUrl = isVerticalViewport ? mobileBg : desktopBg;
    const objectPosition = isVerticalViewport
      ? energeticScene?.mobileObjectPosition || 'center 54%'
      : energeticScene?.desktopObjectPosition || 'center center';

    const jpgFallbackUrl = getBackgroundFallbackUrl(primaryBackgroundUrl);
    const desktopFallbackUrl = getBackgroundFallbackUrl(desktopBg);

    let activeBackgroundUrl = primaryBackgroundUrl;
    if (failedUrls[activeBackgroundUrl]) {
      activeBackgroundUrl = !failedUrls[jpgFallbackUrl]
        ? jpgFallbackUrl
        : !failedUrls[desktopBg]
        ? desktopBg
        : desktopFallbackUrl;
    }

    // Preload current and adjacent background scene images matching the active viewport orientation
    useEffect(() => {
      if (activeBackgroundUrl) {
        preloadImage(activeBackgroundUrl, 'high');
      }
      if (!adjacentProducts || adjacentProducts.length === 0) return;
      adjacentProducts.forEach((prod) => {
        if (!prod) return;
        const adjScene = ENERGETIC_SCENE_BY_ID[prod.id];
        const adjUrl = isVerticalViewport
          ? adjScene?.mobileBackground || prod.mobileBackgroundImage || prod.backgroundImage
          : adjScene?.desktopBackground || prod.backgroundImage;
        if (adjUrl) {
          preloadImage(adjUrl, 'auto');
        }
      });
    }, [activeBackgroundUrl, adjacentProducts, isVerticalViewport]);

    const sceneBgColor = energeticScene?.primaryBgColor || currentProduct.bgColor;

    return (
      <div
        className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
        style={{
          backgroundColor: sceneBgColor,
          transition: 'background-color 420ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        aria-hidden="true"
      >
        {/* 1. DYNAMIC PHOTOGRAPHIC INGREDIENT BACKGROUND SCENE (16:9 Desktop / 9:16 Mobile) */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={`${currentProduct.id}-${isVerticalViewport ? 'mobile-bg' : 'desktop-bg'}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{
              duration: 0.44,
              ease: SMOOTH_EASE,
            }}
            className="absolute inset-0 w-full h-full transform-gpu will-change-transform will-change-opacity"
            style={{ backgroundColor: sceneBgColor }}
          >
            {activeBackgroundUrl ? (
              <img
                src={activeBackgroundUrl}
                alt=""
                width={isVerticalViewport ? 1080 : 1920}
                height={isVerticalViewport ? 1920 : 1080}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
                onError={() => {
                  setFailedUrls((prev) =>
                    prev[activeBackgroundUrl]
                      ? prev
                      : { ...prev, [activeBackgroundUrl]: true }
                  );
                }}
                style={{ objectPosition }}
                className={`w-full h-full object-cover select-none pointer-events-none ${
                  isEnergeticScene ? 'opacity-100' : 'opacity-[0.88]'
                }`}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>

        {/* 2. STUDIO RIM-LIGHT SEPARATION / DEPTH OF FIELD VIGNETTE */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
          style={{
            background: isEnergeticScene
              ? `radial-gradient(ellipse 46% 44% at 50% 49%, ${
                  energeticScene?.secondaryHighlightColor || '#FFFFFF'
                }36 0%, transparent 62%, ${
                  isDarkScene ? 'rgba(0, 0, 0, 0.24)' : 'rgba(0, 0, 0, 0.10)'
                } 100%)`
              : 'radial-gradient(ellipse 66% 56% at 50% 50%, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.08) 58%, rgba(0, 0, 0, 0.05) 100%)',
          }}
        />
      </div>
    );
  }
);
ProductBackgroundScene.displayName = 'ProductBackgroundScene';
