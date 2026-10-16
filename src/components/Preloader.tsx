import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GreenergyLogo } from './GreenergyLogo';
import {
  preloadIntroCollectionPackshots,
  getBackgroundFallbackUrl,
} from '../utils/imagePreloader';

interface PreloaderProps {
  onComplete: () => void;
  onTransitionStart?: () => void;
  minDuration?: number; // ms
}

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type IntroStagePhase = 'circle' | 'ensemble' | 'handoff';

interface EnsembleCoords {
  /** Percentage of stage container width (-45 to +45) */
  xPct: number;
  /** Percentage of stage container height (-35 to +35) */
  yPct: number;
  scale: number;
  rotate: number;
  zIndex: number;
  floatOffset: number;
  floatDuration: number;
}

interface CircularShowcaseStep {
  stepKey: string;
  productId: string;
  categoryLabel: string;
  name: string;
  productBoxImage: string;
  desktopBackground: string;
  mobileBackground: string;
  circleBgColor: string;
  circleHighlightColor: string;
  outerBgColor: string;
  outerRadialGlow: string;
  accentColor: string;
  textColor: string;
  shadowTint: string;
  isDarkScene?: boolean;
  /** Exact normalized timeline start [0..0.82] during Stage 1 */
  startRatio: number;
  /** Exact normalized timeline end [0..0.82] during Stage 1 */
  endRatio: number;
  /** Exact percentage range [1..82] synchronized with this product beat */
  startPercent: number;
  endPercent: number;
  entranceDurationSec: number;
  entrance: {
    x: number[];
    y: number[];
    scale: number[];
    rotate: number[];
  };
  exit: {
    x: number;
    y: number;
    scale: number;
    rotate: number;
  };
  desktopEnsemble: EnsembleCoords;
  mobileEnsemble: EnsembleCoords;
}

/**
 * Complete 10-product GREENERGY opening showcase grouped by category:
 * 1–4: Fava Beans Chips (Tomato & Basil, Chili & Lemon, Sweet Herbs & Olives, Honey & Mustard)
 * 5–6: Chickpea Protein Snacks (Sea Salted, Lemon & Pepper)
 * 7–8: Peanuts & Fava (Red Thai, Sweet Mustard)
 * 9–10: Protein Cookies (Double Chocolate, Apple & Cinnamon)
 *
 * Stage 1 (1% -> 82%): One-by-one circular reveal with flavor-wrapped backgrounds inside the circle.
 * Stage 2 (83% -> 100%): All 10 products animate outward from the circle into a floating brand-family hero composition.
 * Stage 3 (100% -> Exit): Seamless handoff into the interactive product-selection experience.
 */
const CIRCULAR_SHOWCASE_STEPS: CircularShowcaseStep[] = [
  // =========================================================================
  // GROUP 1: FAVA BEANS CHIPS (4 PRODUCTS)
  // =========================================================================
  {
    stepKey: 'step-0-tomato-basil',
    productId: 'fava-beans-tomato-basil',
    categoryLabel: 'FAVA BEANS',
    name: 'Tomato & Basil',
    productBoxImage: '/products/fava-beans/fava-beans-chips-tomato-basil.webp',
    desktopBackground: '/backgrounds/energetic/tomato-basil-desktop.webp',
    mobileBackground: '/backgrounds/energetic/tomato-basil-mobile.webp',
    circleBgColor: '#FF5A47',
    circleHighlightColor: '#FF947D',
    outerBgColor: '#FF6B58',
    outerRadialGlow: 'rgba(255, 196, 180, 0.58)',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF',
    shadowTint: 'rgba(138, 18, 8, 0.34)',
    startRatio: 0.0,
    endRatio: 0.082,
    startPercent: 1,
    endPercent: 8,
    entranceDurationSec: 0.28,
    entrance: {
      x: [0, 0, 0],
      y: [56, -5, 0],
      scale: [0.78, 1.045, 1],
      rotate: [-2.2, 0.4, 0],
    },
    exit: {
      x: -96,
      y: -10,
      scale: 0.88,
      rotate: -4.0,
    },
    // Center hero anchor in Stage 2 floating family composition
    desktopEnsemble: {
      xPct: 0,
      yPct: 2,
      scale: 1.05,
      rotate: -1.5,
      zIndex: 30,
      floatOffset: 4,
      floatDuration: 4.2,
    },
    mobileEnsemble: {
      xPct: 0,
      yPct: 3,
      scale: 0.95,
      rotate: -1.2,
      zIndex: 30,
      floatOffset: 3,
      floatDuration: 4.2,
    },
  },
  {
    stepKey: 'step-1-chili-lemon',
    productId: 'fava-beans-chili-lemon',
    categoryLabel: 'FAVA BEANS',
    name: 'Chili & Lemon',
    productBoxImage: '/products/fava-beans/fava-beans-chips-chili-lemon.webp',
    desktopBackground: '/backgrounds/energetic/chili-lemon-desktop.webp',
    mobileBackground: '/backgrounds/energetic/chili-lemon-mobile.webp',
    circleBgColor: '#FFD41F',
    circleHighlightColor: '#FFF38A',
    outerBgColor: '#FFE042',
    outerRadialGlow: 'rgba(255, 250, 190, 0.68)',
    accentColor: '#D92C22',
    textColor: '#5C0B06',
    shadowTint: 'rgba(145, 76, 4, 0.28)',
    startRatio: 0.082,
    endRatio: 0.164,
    startPercent: 9,
    endPercent: 16,
    entranceDurationSec: 0.28,
    entrance: {
      x: [108, -6, 0],
      y: [12, -3, 0],
      scale: [0.8, 1.04, 1],
      rotate: [5.5, -0.6, 0],
    },
    exit: {
      x: -96,
      y: -16,
      scale: 0.88,
      rotate: -3.8,
    },
    desktopEnsemble: {
      xPct: -18,
      yPct: -5,
      scale: 0.88,
      rotate: -8.5,
      zIndex: 26,
      floatOffset: -4.5,
      floatDuration: 4.6,
    },
    mobileEnsemble: {
      xPct: -24,
      yPct: -4,
      scale: 0.78,
      rotate: -8.5,
      zIndex: 26,
      floatOffset: -3.5,
      floatDuration: 4.6,
    },
  },
  {
    stepKey: 'step-2-sweet-herbs-olives',
    productId: 'fava-beans-sweet-herbs-olives',
    categoryLabel: 'FAVA BEANS',
    name: 'Sweet Herbs & Olives',
    productBoxImage: '/products/fava-beans/fava-beans-chips-sweet-herbs-olives.webp',
    desktopBackground: '/backgrounds/energetic/sweet-herbs-olives-desktop.webp',
    mobileBackground: '/backgrounds/energetic/sweet-herbs-olives-mobile.webp',
    circleBgColor: '#48C0EB',
    circleHighlightColor: '#A8E8FF',
    outerBgColor: '#5CC9F0',
    outerRadialGlow: 'rgba(205, 244, 255, 0.62)',
    accentColor: '#062C3D',
    textColor: '#062C3D',
    shadowTint: 'rgba(6, 52, 78, 0.30)',
    startRatio: 0.164,
    endRatio: 0.246,
    startPercent: 17,
    endPercent: 25,
    entranceDurationSec: 0.28,
    entrance: {
      x: [-70, 4, 0],
      y: [56, -4, 0],
      scale: [0.8, 1.04, 1],
      rotate: [-4.8, 0.5, 0],
    },
    exit: {
      x: -96,
      y: 10,
      scale: 0.88,
      rotate: -3.5,
    },
    desktopEnsemble: {
      xPct: 18,
      yPct: -5,
      scale: 0.88,
      rotate: 8.0,
      zIndex: 26,
      floatOffset: 4.5,
      floatDuration: 4.8,
    },
    mobileEnsemble: {
      xPct: 24,
      yPct: -4,
      scale: 0.78,
      rotate: 8.0,
      zIndex: 26,
      floatOffset: 3.5,
      floatDuration: 4.8,
    },
  },
  {
    stepKey: 'step-3-honey-mustard',
    productId: 'fava-beans-honey-mustard',
    categoryLabel: 'FAVA BEANS',
    name: 'Honey & Mustard',
    productBoxImage: '/products/fava-beans/fava-beans-chips-honey-mustard.webp',
    desktopBackground: '/backgrounds/energetic/honey-mustard-desktop.webp',
    mobileBackground: '/backgrounds/energetic/honey-mustard-mobile.webp',
    circleBgColor: '#F5B824',
    circleHighlightColor: '#FFE899',
    outerBgColor: '#F7C43B',
    outerRadialGlow: 'rgba(255, 241, 186, 0.64)',
    accentColor: '#4E2302',
    textColor: '#4E2302',
    shadowTint: 'rgba(110, 56, 4, 0.30)',
    startRatio: 0.246,
    endRatio: 0.328,
    startPercent: 26,
    endPercent: 33,
    entranceDurationSec: 0.28,
    entrance: {
      x: [94, -5, 0],
      y: [44, -4, 0],
      scale: [0.8, 1.04, 1],
      rotate: [4.6, -0.5, 0],
    },
    exit: {
      x: -92,
      y: -12,
      scale: 0.88,
      rotate: -3.2,
    },
    desktopEnsemble: {
      xPct: -12,
      yPct: 18,
      scale: 0.84,
      rotate: -5.5,
      zIndex: 27,
      floatOffset: 3.5,
      floatDuration: 4.4,
    },
    mobileEnsemble: {
      xPct: -18,
      yPct: 19,
      scale: 0.74,
      rotate: -6.0,
      zIndex: 27,
      floatOffset: 3,
      floatDuration: 4.4,
    },
  },

  // =========================================================================
  // GROUP 2: CHICKPEA PROTEIN SNACKS (2 PRODUCTS)
  // =========================================================================
  {
    stepKey: 'step-4-chickpea-salted',
    productId: 'chickpea-salted',
    categoryLabel: 'CHICKPEA SNACKS',
    name: 'Chickpea Sea Salted',
    productBoxImage: '/products/chickpea-protein-snacks/chickpea-protein-snack-salted.webp',
    desktopBackground: '/backgrounds/energetic/chickpea-salted-desktop.webp',
    mobileBackground: '/backgrounds/energetic/chickpea-salted-mobile.webp',
    circleBgColor: '#23A8E0',
    circleHighlightColor: '#9EE6FF',
    outerBgColor: '#36B4E8',
    outerRadialGlow: 'rgba(195, 242, 255, 0.64)',
    accentColor: '#05283B',
    textColor: '#05283B',
    shadowTint: 'rgba(5, 44, 68, 0.30)',
    startRatio: 0.328,
    endRatio: 0.41,
    startPercent: 34,
    endPercent: 41,
    entranceDurationSec: 0.28,
    entrance: {
      x: [-88, 5, 0],
      y: [36, -4, 0],
      scale: [0.8, 1.04, 1],
      rotate: [-5.0, 0.5, 0],
    },
    exit: {
      x: 92,
      y: -12,
      scale: 0.88,
      rotate: 3.5,
    },
    desktopEnsemble: {
      xPct: -32,
      yPct: -14,
      scale: 0.77,
      rotate: -12.0,
      zIndex: 21,
      floatOffset: -3.5,
      floatDuration: 5.0,
    },
    mobileEnsemble: {
      xPct: -24,
      yPct: -23,
      scale: 0.68,
      rotate: -11.0,
      zIndex: 22,
      floatOffset: -3,
      floatDuration: 5.0,
    },
  },
  {
    stepKey: 'step-5-chickpea-lemon-pepper',
    productId: 'chickpea-lemon-pepper',
    categoryLabel: 'CHICKPEA SNACKS',
    name: 'Chickpea Lemon & Pepper',
    productBoxImage: '/products/chickpea-protein-snacks/chickpea-protein-snack-lemon-pepper.webp',
    desktopBackground: '/backgrounds/energetic/chickpea-lemon-pepper-desktop.webp',
    mobileBackground: '/backgrounds/energetic/chickpea-lemon-pepper-mobile.webp',
    circleBgColor: '#FFD11A',
    circleHighlightColor: '#FFF494',
    outerBgColor: '#FFDA38',
    outerRadialGlow: 'rgba(255, 250, 195, 0.68)',
    accentColor: '#3B2602',
    textColor: '#3B2602',
    shadowTint: 'rgba(120, 74, 4, 0.28)',
    startRatio: 0.41,
    endRatio: 0.492,
    startPercent: 42,
    endPercent: 49,
    entranceDurationSec: 0.28,
    entrance: {
      x: [96, -5, 0],
      y: [24, -3, 0],
      scale: [0.8, 1.04, 1],
      rotate: [5.2, -0.5, 0],
    },
    exit: {
      x: -94,
      y: -14,
      scale: 0.88,
      rotate: -3.6,
    },
    desktopEnsemble: {
      xPct: 32,
      yPct: -14,
      scale: 0.77,
      rotate: 11.5,
      zIndex: 21,
      floatOffset: 3.5,
      floatDuration: 5.1,
    },
    mobileEnsemble: {
      xPct: 24,
      yPct: -23,
      scale: 0.68,
      rotate: 11.0,
      zIndex: 22,
      floatOffset: 3,
      floatDuration: 5.1,
    },
  },

  // =========================================================================
  // GROUP 3: PEANUTS & FAVA (2 PRODUCTS)
  // =========================================================================
  {
    stepKey: 'step-6-peanuts-red-thai',
    productId: 'peanuts-fava-red-thai',
    categoryLabel: 'BLACK SERIES',
    name: 'Red Thai Black Series',
    productBoxImage: '/products/peanuts-fava/peanuts-fava-beans-red-thai.webp',
    desktopBackground: '/backgrounds/energetic/peanuts-red-thai-desktop.webp',
    mobileBackground: '/backgrounds/energetic/peanuts-red-thai-mobile.webp',
    circleBgColor: '#D9231E',
    circleHighlightColor: '#FF8563',
    outerBgColor: '#E02E28',
    outerRadialGlow: 'rgba(255, 165, 140, 0.54)',
    accentColor: '#FFFFFF',
    textColor: '#FFF6F2',
    shadowTint: 'rgba(95, 8, 4, 0.38)',
    isDarkScene: true,
    startRatio: 0.492,
    endRatio: 0.574,
    startPercent: 50,
    endPercent: 57,
    entranceDurationSec: 0.28,
    entrance: {
      x: [102, -5, 0],
      y: [28, -3, 0],
      scale: [0.8, 1.045, 1],
      rotate: [5.4, -0.5, 0],
    },
    exit: {
      x: -94,
      y: -12,
      scale: 0.88,
      rotate: -3.5,
    },
    desktopEnsemble: {
      xPct: 12,
      yPct: 18,
      scale: 0.84,
      rotate: 6.0,
      zIndex: 27,
      floatOffset: -3.5,
      floatDuration: 4.5,
    },
    mobileEnsemble: {
      xPct: 18,
      yPct: 19,
      scale: 0.74,
      rotate: 6.5,
      zIndex: 27,
      floatOffset: -3,
      floatDuration: 4.5,
    },
  },
  {
    stepKey: 'step-7-peanuts-sweet-mustard',
    productId: 'peanuts-fava-sweet-mustard',
    categoryLabel: 'BLACK SERIES',
    name: 'Sweet Mustard Black Series',
    productBoxImage: '/products/peanuts-fava/peanuts-fava-beans-sweet-mustard.webp',
    desktopBackground: '/backgrounds/energetic/peanuts-sweet-mustard-desktop.webp',
    mobileBackground: '/backgrounds/energetic/peanuts-sweet-mustard-mobile.webp',
    circleBgColor: '#F2B418',
    circleHighlightColor: '#FFE88A',
    outerBgColor: '#F6BF2C',
    outerRadialGlow: 'rgba(255, 240, 175, 0.64)',
    accentColor: '#472103',
    textColor: '#472103',
    shadowTint: 'rgba(115, 58, 4, 0.30)',
    startRatio: 0.574,
    endRatio: 0.656,
    startPercent: 58,
    endPercent: 66,
    entranceDurationSec: 0.28,
    entrance: {
      x: [-92, 5, 0],
      y: [40, -4, 0],
      scale: [0.8, 1.04, 1],
      rotate: [-4.8, 0.5, 0],
    },
    exit: {
      x: 92,
      y: -10,
      scale: 0.88,
      rotate: 3.4,
    },
    desktopEnsemble: {
      xPct: -30,
      yPct: 12,
      scale: 0.76,
      rotate: -9.5,
      zIndex: 22,
      floatOffset: 4,
      floatDuration: 4.9,
    },
    mobileEnsemble: {
      xPct: -31,
      yPct: 10,
      scale: 0.66,
      rotate: -11.5,
      zIndex: 21,
      floatOffset: 3,
      floatDuration: 4.9,
    },
  },

  // =========================================================================
  // GROUP 4: PROTEIN COOKIES (2 PRODUCTS)
  // =========================================================================
  {
    stepKey: 'step-8-cookie-double-chocolate',
    productId: 'protein-cookies-double-chocolate',
    categoryLabel: 'PROTEIN COOKIES',
    name: 'Double Chocolate',
    productBoxImage: '/products/protein-cookies/protein-cookies-double-chocolate.webp',
    desktopBackground: '/backgrounds/energetic/cookie-double-chocolate-desktop.webp',
    mobileBackground: '/backgrounds/energetic/cookie-double-chocolate-mobile.webp',
    circleBgColor: '#3B1D12',
    circleHighlightColor: '#A6633C',
    outerBgColor: '#4A2416',
    outerRadialGlow: 'rgba(214, 140, 92, 0.46)',
    accentColor: '#FFF5EB',
    textColor: '#FFF5EB',
    shadowTint: 'rgba(18, 6, 2, 0.45)',
    isDarkScene: true,
    startRatio: 0.656,
    endRatio: 0.738,
    startPercent: 67,
    endPercent: 74,
    entranceDurationSec: 0.28,
    entrance: {
      x: [0, 0, 0],
      y: [56, -5, 0],
      scale: [0.78, 1.04, 1],
      rotate: [-3.2, 0.4, 0],
    },
    exit: {
      x: -88,
      y: -10,
      scale: 0.88,
      rotate: -3.0,
    },
    desktopEnsemble: {
      xPct: 30,
      yPct: 12,
      scale: 0.75,
      rotate: 10.0,
      zIndex: 22,
      floatOffset: -4,
      floatDuration: 4.7,
    },
    mobileEnsemble: {
      xPct: 31,
      yPct: 10,
      scale: 0.66,
      rotate: 11.5,
      zIndex: 21,
      floatOffset: -3,
      floatDuration: 4.7,
    },
  },
  {
    stepKey: 'step-9-cookie-apple-cinnamon',
    productId: 'protein-cookies-apple-cinnamon',
    categoryLabel: 'PROTEIN COOKIES',
    name: 'Apple & Cinnamon',
    productBoxImage: '/products/protein-cookies/protein-cookies-apple-cinnamon.webp',
    desktopBackground: '/backgrounds/energetic/cookie-apple-cinnamon-desktop.webp',
    mobileBackground: '/backgrounds/energetic/cookie-apple-cinnamon-mobile.webp',
    circleBgColor: '#E04836',
    circleHighlightColor: '#FFA07A',
    outerBgColor: '#E85644',
    outerRadialGlow: 'rgba(255, 195, 170, 0.58)',
    accentColor: '#FFFFFF',
    textColor: '#FFFFFF',
    shadowTint: 'rgba(120, 16, 8, 0.34)',
    startRatio: 0.738,
    endRatio: 0.82,
    startPercent: 75,
    endPercent: 82,
    entranceDurationSec: 0.28,
    entrance: {
      x: [88, -4, 0],
      y: [36, -4, 0],
      scale: [0.8, 1.04, 1],
      rotate: [4.2, -0.4, 0],
    },
    exit: {
      x: 0,
      y: -18,
      scale: 0.9,
      rotate: 0,
    },
    desktopEnsemble: {
      xPct: 0,
      yPct: -23,
      scale: 0.75,
      rotate: 3.0,
      zIndex: 20,
      floatOffset: -3.5,
      floatDuration: 5.2,
    },
    mobileEnsemble: {
      xPct: 0,
      yPct: -26,
      scale: 0.66,
      rotate: 2.5,
      zIndex: 20,
      floatOffset: -3,
      floatDuration: 5.2,
    },
  },
];

const ENSEMBLE_START_RATIO = 0.82;
const ENSEMBLE_START_PERCENT = 83;

/**
 * Returns the active circular showcase step index for Stage 1 (1%–82%).
 */
const getStepIndexForProgress = (pct: number): number => {
  for (let i = CIRCULAR_SHOWCASE_STEPS.length - 1; i >= 0; i--) {
    if (pct >= CIRCULAR_SHOWCASE_STEPS[i].startPercent) {
      return i;
    }
  }
  return 0;
};

/**
 * Piecewise-synchronized timeline curve mapping linear elapsed ratio [0, 1]
 * across the 10 circular product beats (0 -> 0.82) and the Stage 2 brand-family
 * build (0.82 -> 1.00).
 */
const computeSynchronizedTimelineRatio = (linearRatio: number): number => {
  const clamped = Math.max(0, Math.min(1, linearRatio));
  if (clamped >= 1) return 1;

  // Stage 2: All-Products Family Build (0.82 -> 1.00 maps to 83% -> 100%)
  if (clamped >= ENSEMBLE_START_RATIO) {
    const segSpan = 1 - ENSEMBLE_START_RATIO;
    const localT = Math.max(0, Math.min(1, (clamped - ENSEMBLE_START_RATIO) / segSpan));
    const easedLocal = localT * 0.7 + (1 - (1 - localT) * (1 - localT)) * 0.3;
    const pctStartRatio = (ENSEMBLE_START_PERCENT - 1) / 99;
    return pctStartRatio + easedLocal * (1 - pctStartRatio);
  }

  // Stage 1: 10 Circular Product Beats (0.00 -> 0.82 maps to 1% -> 82%)
  for (let i = 0; i < CIRCULAR_SHOWCASE_STEPS.length; i++) {
    const step = CIRCULAR_SHOWCASE_STEPS[i];
    if (clamped <= step.endRatio || i === CIRCULAR_SHOWCASE_STEPS.length - 1) {
      const segSpan = Math.max(0.0001, step.endRatio - step.startRatio);
      const localT = Math.max(0, Math.min(1, (clamped - step.startRatio) / segSpan));
      const easedLocal = localT * 0.78 + (1 - (1 - localT) * (1 - localT)) * 0.22;
      const pctStartRatio = (step.startPercent - 1) / 99;
      const pctEndRatio = (step.endPercent - 1) / 99;
      return pctStartRatio + easedLocal * (pctEndRatio - pctStartRatio);
    }
  }
  return clamped;
};

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  onTransitionStart,
  minDuration = 4800,
}) => {
  const [progress, setProgress] = useState(1);
  const [stepIndex, setStepIndex] = useState(0);
  const [stagePhase, setStagePhase] = useState<IntroStagePhase>('circle');
  const [isExiting, setIsExiting] = useState(false);
  const [failedBgUrls, setFailedBgUrls] = useState<Record<string, boolean>>({});
  const [isVerticalViewport, setIsVerticalViewport] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || window.innerHeight > window.innerWidth * 1.05;
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const lastProgressRef = useRef(1);
  const lastStepIndexRef = useRef(0);
  const stagePhaseRef = useRef<IntroStagePhase>('circle');
  const assetsReadyRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const onTransitionStartRef = useRef(onTransitionStart);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onTransitionStartRef.current = onTransitionStart;
  }, [onComplete, onTransitionStart]);

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

  // Preload & decode all 10 GREENERGY packshots and energetic backgrounds immediately
  useEffect(() => {
    let cancelled = false;
    const safetyTimer = setTimeout(() => {
      if (!cancelled) {
        assetsReadyRef.current = true;
      }
    }, Math.min(minDuration, 3200));

    preloadIntroCollectionPackshots()
      .then(() => {
        if (!cancelled) {
          assetsReadyRef.current = true;
        }
      })
      .catch(() => {
        if (!cancelled) {
          assetsReadyRef.current = true;
        }
      });

    return () => {
      cancelled = true;
      clearTimeout(safetyTimer);
    };
  }, [minDuration]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    let frameId: number;
    let handoffTimer: ReturnType<typeof setTimeout>;
    let exitTimer: ReturnType<typeof setTimeout>;
    let completeTimer: ReturnType<typeof setTimeout>;
    let completionStarted = false;

    const setBarScale = (scaleValue: number) => {
      if (progressFillRef.current) {
        const clampedScale = Math.max(0.01, Math.min(1, scaleValue));
        progressFillRef.current.style.transform = `scaleX(${clampedScale})`;
      }
    };

    setBarScale(0.01);

    const updateProgress = (now: number) => {
      const elapsed = Math.max(0, now - startTime);
      const rawLinearRatio = Math.min(1, elapsed / minDuration);
      const syncedRatio = computeSynchronizedTimelineRatio(rawLinearRatio);

      const isReadyForHundred = rawLinearRatio >= 1 && assetsReadyRef.current;
      const continuousFill = isReadyForHundred
        ? 1
        : Math.min(0.99, 0.01 + syncedRatio * 0.99);

      const targetPct = isReadyForHundred
        ? 100
        : Math.max(1, Math.min(99, Math.round(1 + syncedRatio * 99)));

      const nextPct = Math.max(lastProgressRef.current, targetPct);

      setBarScale(isReadyForHundred ? 1 : Math.max(continuousFill, nextPct / 100));

      if (nextPct !== lastProgressRef.current) {
        lastProgressRef.current = nextPct;
        setProgress(nextPct);
      }

      // Transition from Stage 1 (Circular Showcase) -> Stage 2 (Floating Brand Family Ensemble)
      if (nextPct >= ENSEMBLE_START_PERCENT && stagePhaseRef.current === 'circle') {
        stagePhaseRef.current = 'ensemble';
        setStagePhase('ensemble');
      } else if (nextPct < ENSEMBLE_START_PERCENT) {
        const nextStep = getStepIndexForProgress(nextPct);
        if (nextStep !== lastStepIndexRef.current) {
          lastStepIndexRef.current = nextStep;
          setStepIndex(nextStep);
        }
      }

      if (!isReadyForHundred) {
        frameId = requestAnimationFrame(updateProgress);
      } else if (!completionStarted) {
        completionStarted = true;
        lastProgressRef.current = 100;
        setProgress(100);
        setBarScale(1);

        if (stagePhaseRef.current === 'circle') {
          stagePhaseRef.current = 'ensemble';
          setStagePhase('ensemble');
        }

        // Hold the full 10-product floating brand family showcase at 100% for a memorable hero beat,
        // then smoothly hand off to Stage 3 (interactive product selection).
        frameId = requestAnimationFrame(() => {
          setBarScale(1);
          handoffTimer = setTimeout(() => {
            stagePhaseRef.current = 'handoff';
            setStagePhase('handoff');
            onTransitionStartRef.current?.();

            exitTimer = setTimeout(() => {
              setIsExiting(true);
              completeTimer = setTimeout(() => {
                document.body.style.overflow = originalOverflow;
                onCompleteRef.current();
              }, 480);
            }, 260);
          }, 560);
        });
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(handoffTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [minDuration]);

  const activeStep =
    CIRCULAR_SHOWCASE_STEPS[stepIndex] || CIRCULAR_SHOWCASE_STEPS[0];
  const heroFirstStep = CIRCULAR_SHOWCASE_STEPS[0];

  // In Stage 2 & 3, transition the studio atmosphere back to the flagship Tomato & Basil coral-gold palette
  // so the handoff into the interactive hero stage is 100% seamless.
  const isEnsembleOrHandoff = stagePhase === 'ensemble' || stagePhase === 'handoff';
  const currentOuterBg = isEnsembleOrHandoff
    ? heroFirstStep.outerBgColor
    : activeStep.outerBgColor;
  const currentOuterGlow = isEnsembleOrHandoff
    ? 'rgba(255, 224, 186, 0.65)'
    : activeStep.outerRadialGlow;
  const currentTextColor = isEnsembleOrHandoff
    ? heroFirstStep.textColor
    : activeStep.textColor;
  const currentAccentColor = isEnsembleOrHandoff
    ? heroFirstStep.accentColor
    : activeStep.accentColor;
  const currentCircleBg = isEnsembleOrHandoff
    ? heroFirstStep.circleBgColor
    : activeStep.circleBgColor;
  const currentShadowTint = isEnsembleOrHandoff
    ? heroFirstStep.shadowTint
    : activeStep.shadowTint;

  const primaryBgUrl = isEnsembleOrHandoff
    ? isVerticalViewport
      ? heroFirstStep.mobileBackground
      : heroFirstStep.desktopBackground
    : isVerticalViewport
    ? activeStep.mobileBackground
    : activeStep.desktopBackground;

  const fallbackBgUrl = getBackgroundFallbackUrl(primaryBgUrl);
  const resolvedCircleBgUrl = failedBgUrls[primaryBgUrl]
    ? fallbackBgUrl
    : primaryBgUrl;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="greenergy-circular-product-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.48, ease: SMOOTH_EASE },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between select-none overflow-hidden pt-safe pb-safe transform-gpu will-change-transform will-change-opacity"
          style={{
            backgroundColor: currentOuterBg,
            color: currentTextColor,
            transition:
              'background-color 380ms cubic-bezier(0.22, 1, 0.36, 1), color 300ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* 1. CLEAN, ENERGETIC, PREMIUM STUDIO BACKGROUND COMPLEMENTING THE PRODUCTS */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Soft luminous central radial studio light bloom */}
            <div
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={{
                background: `radial-gradient(circle min(78vw, 760px) at 50% 47%, ${currentOuterGlow} 0%, rgba(255, 255, 255, 0.16) 50%, transparent 80%)`,
              }}
            />

            {/* Subtle soft ambient studio vignette for dimensional contrast */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 47%, transparent 44%, rgba(18, 6, 2, 0.14) 100%)',
              }}
            />
          </div>

          {/* Top-Left Brand-Safe GREENERGY Logo Placement */}
          <header className="relative z-30 w-full px-4 sm:px-6 lg:px-10 pt-2.5 sm:pt-4 lg:pt-5 pl-safe pr-safe flex items-center justify-between flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, ease: SMOOTH_EASE }}
            >
              <GreenergyLogo
                isDarkScene={!isEnsembleOrHandoff && Boolean(activeStep.isDarkScene)}
              />
            </motion.div>

            {/* Subtle Category / Stage Pill Indicator in Top Right */}
            <motion.div
              key={isEnsembleOrHandoff ? 'collection-family' : activeStep.categoryLabel}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: SMOOTH_EASE }}
              className="px-3.5 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/55 text-[10px] sm:text-[11px] font-display font-extrabold uppercase tracking-[0.16em]"
              style={{ color: currentTextColor }}
            >
              {isEnsembleOrHandoff ? 'GREENERGY COLLECTION' : activeStep.categoryLabel}
            </motion.div>
          </header>

          {/* 2. THE CENTERPIECE — STAGE 1 CIRCULAR PRODUCT SHOWCASE & STAGE 2 FLOATING BRAND-FAMILY COMPOSITION */}
          <div className="relative z-10 flex-1 w-full flex flex-col items-center justify-center px-3 sm:px-6 min-h-0">
            {/* Stage Container holding both the Circular Portal and the Expanding Multi-Product Family Cloud */}
            <div className="relative w-full max-w-[1180px] h-[min(60svh,440px)] sm:h-[min(62svh,500px)] lg:h-[min(64svh,540px)] flex items-center justify-center">
              {/* CENTRAL 1:1 CIRCULAR DIMENSIONAL ADVERTISING PORTAL */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{
                  scale:
                    stagePhase === 'handoff'
                      ? isVerticalViewport
                        ? 1.16
                        : 1.26
                      : stagePhase === 'ensemble'
                      ? isVerticalViewport
                        ? 1.08
                        : 1.16
                      : 1,
                  opacity: stagePhase === 'handoff' ? 0 : 1,
                }}
                transition={{ duration: 0.52, ease: SMOOTH_EASE }}
                className="relative aspect-square w-[min(76vw,310px)] h-[min(76vw,310px)] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[430px] lg:h-[430px] xl:w-[460px] xl:h-[460px] max-w-[54svh] max-h-[54svh] rounded-full p-[6px] sm:p-[8px] bg-white/30 backdrop-blur-xl border border-white/75 flex items-center justify-center transform-gpu"
                style={{
                  boxShadow: `0 30px 68px -12px ${currentShadowTint}, 0 14px 30px -8px rgba(18, 8, 4, 0.20), inset 0 2px 4px rgba(255, 255, 255, 0.88), inset 0 -2px 6px rgba(0, 0, 0, 0.08)`,
                  transition: 'box-shadow 380ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {/* Inner 1:1 Circular Stage Portal */}
                <div
                  className="relative w-full h-full rounded-full overflow-hidden isolate flex items-center justify-center"
                  style={{
                    backgroundColor: currentCircleBg,
                    transition:
                      'background-color 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {/* Layer A inside Circle: Vibrant Flavor-Specific Photographic Studio Scene */}
                  <AnimatePresence mode="sync" initial={false}>
                    <motion.div
                      key={
                        isEnsembleOrHandoff
                          ? 'circle-bg-ensemble-hero'
                          : `circle-bg-${activeStep.stepKey}`
                      }
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 1.1 }
                      }
                      animate={{
                        opacity: isEnsembleOrHandoff ? 0.92 : 1,
                        scale: 1.03,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.97,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: SMOOTH_EASE,
                      }}
                      className="absolute inset-0 w-full h-full pointer-events-none transform-gpu will-change-transform will-change-opacity"
                    >
                      <img
                        src={resolvedCircleBgUrl}
                        alt=""
                        decoding="async"
                        loading="eager"
                        fetchPriority="high"
                        referrerPolicy="no-referrer"
                        onError={() => {
                          setFailedBgUrls((prev) =>
                            prev[primaryBgUrl]
                              ? prev
                              : { ...prev, [primaryBgUrl]: true }
                          );
                        }}
                        className="w-full h-full object-cover object-center scale-105 select-none pointer-events-none"
                      />

                      {/* Internal Dimensional Studio Lighting Glow */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${
                            isEnsembleOrHandoff
                              ? heroFirstStep.circleHighlightColor
                              : activeStep.circleHighlightColor
                          }55 0%, transparent 66%)`,
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* STAGE 1 ONLY: Single-Product Sequential Reveal Inside the Circle */}
                  <AnimatePresence mode="popLayout" initial={true}>
                    {stagePhase === 'circle' && (
                      <motion.div
                        key={activeStep.stepKey}
                        initial={
                          prefersReducedMotion
                            ? { opacity: 0, scale: 0.95 }
                            : {
                                opacity: 0,
                                x: activeStep.entrance.x[0],
                                y: activeStep.entrance.y[0],
                                scale: activeStep.entrance.scale[0],
                                rotate: activeStep.entrance.rotate[0],
                              }
                        }
                        animate={
                          prefersReducedMotion
                            ? {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 1,
                                rotate: 0,
                                transition: { duration: 0.2, ease: SMOOTH_EASE },
                              }
                            : {
                                opacity: [0, 1, 1],
                                x: activeStep.entrance.x,
                                y: activeStep.entrance.y,
                                scale: activeStep.entrance.scale,
                                rotate: activeStep.entrance.rotate,
                                transition: {
                                  duration: activeStep.entranceDurationSec,
                                  times: [0, 0.72, 1],
                                  ease: SMOOTH_EASE,
                                },
                              }
                        }
                        exit={
                          prefersReducedMotion
                            ? {
                                opacity: 0,
                                scale: 0.95,
                                transition: { duration: 0.15, ease: SMOOTH_EASE },
                              }
                            : {
                                opacity: 0,
                                x: activeStep.exit.x,
                                y: activeStep.exit.y,
                                scale: activeStep.exit.scale,
                                rotate: activeStep.exit.rotate,
                                transition: {
                                  duration: 0.2,
                                  ease: SMOOTH_EASE,
                                },
                              }
                        }
                        className="relative z-20 w-[75%] h-[75%] sm:w-[77%] sm:h-[77%] flex items-center justify-center pointer-events-none transform-gpu will-change-transform will-change-opacity"
                      >
                        {/* Grounded Studio Contact Shadow Inside the Circular Stage */}
                        <div
                          className="absolute -bottom-2.5 sm:-bottom-3.5 left-1/2 -translate-x-1/2 w-[68%] h-5 sm:h-6 rounded-full pointer-events-none"
                          style={{
                            background:
                              'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(20, 8, 2, 0.58) 0%, rgba(20, 8, 2, 0.20) 52%, transparent 78%)',
                          }}
                        />

                        <img
                          src={activeStep.productBoxImage}
                          alt={activeStep.name}
                          decoding="async"
                          loading="eager"
                          fetchPriority="high"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain object-center drop-shadow-[0_22px_34px_rgba(18,8,4,0.38)] select-none pointer-events-none"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Fine Glossy Edge Highlights & Subtle Internal Lens Lighting */}
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none z-30"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.06) 28%, transparent 52%, rgba(0, 0, 0, 0.08) 100%)',
                      boxShadow:
                        'inset 0 2px 5px rgba(255, 255, 255, 0.65), inset 0 -3px 8px rgba(18, 6, 2, 0.16)',
                    }}
                  />
                </div>
              </motion.div>

              {/* STAGE 2 & STAGE 3: ALL 10 GREENERGY PRODUCTS ANIMATE OUTWARD INTO A FLOATING BRAND-FAMILY COMPOSITION */}
              <AnimatePresence>
                {isEnsembleOrHandoff && (
                  <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
                    {CIRCULAR_SHOWCASE_STEPS.map((item, idx) => {
                      const coords = isVerticalViewport
                        ? item.mobileEnsemble
                        : item.desktopEnsemble;
                      const isHeroCenterProduct = idx === 0;
                      const isHandoff = stagePhase === 'handoff';

                      // During Stage 3 handoff, the 9 surrounding products glide outward and fade
                      // while the central flagship product (Tomato & Basil) aligns smoothly with the hero stage.
                      const targetLeft = isHandoff
                        ? isHeroCenterProduct
                          ? 50
                          : 50 + coords.xPct * 1.24
                        : 50 + coords.xPct;
                      const targetTop = isHandoff
                        ? isHeroCenterProduct
                          ? 50
                          : 50 + coords.yPct * 1.24
                        : 50 + coords.yPct;
                      const targetScale = isHandoff
                        ? isHeroCenterProduct
                          ? 1.08
                          : coords.scale * 0.88
                        : coords.scale;
                      const targetRotate = isHandoff
                        ? isHeroCenterProduct
                          ? 0
                          : coords.rotate * 1.15
                        : coords.rotate;
                      const targetOpacity = isHandoff
                        ? isHeroCenterProduct
                          ? 1
                          : 0
                        : 1;

                      return (
                        <motion.div
                          key={`ensemble-${item.productId}`}
                          initial={{
                            left: '50%',
                            top: '50%',
                            x: '-50%',
                            y: '-50%',
                            scale: isHeroCenterProduct ? 0.82 : 0.36,
                            rotate: 0,
                            opacity: 0,
                          }}
                          animate={{
                            left: `${targetLeft}%`,
                            top: `${targetTop}%`,
                            x: '-50%',
                            y: '-50%',
                            scale: targetScale,
                            rotate: targetRotate,
                            opacity: targetOpacity,
                          }}
                          transition={{
                            duration: isHandoff ? 0.36 : 0.56,
                            delay: isHandoff ? 0 : idx * 0.022,
                            ease: SMOOTH_EASE,
                          }}
                          style={{ zIndex: coords.zIndex }}
                          className="absolute w-[142px] h-[178px] xs:w-[158px] xs:h-[196px] sm:w-[205px] sm:h-[252px] md:w-[230px] md:h-[282px] lg:w-[255px] lg:h-[312px] flex items-center justify-center transform-gpu will-change-transform will-change-opacity"
                        >
                          <motion.div
                            animate={
                              prefersReducedMotion || isHandoff
                                ? { y: 0 }
                                : {
                                    y: [0, coords.floatOffset, 0],
                                  }
                            }
                            transition={{
                              duration: coords.floatDuration,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="relative w-full h-full flex items-center justify-center"
                          >
                            {/* Soft Dimensional Ground Shadow Under Each Floating Product */}
                            <div
                              className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[62%] h-4 sm:h-5 rounded-full pointer-events-none"
                              style={{
                                background:
                                  'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(18, 6, 2, 0.42) 0%, transparent 76%)',
                              }}
                            />

                            <img
                              src={item.productBoxImage}
                              alt={item.name}
                              decoding="async"
                              loading="eager"
                              fetchPriority="high"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain object-center drop-shadow-[0_20px_32px_rgba(18,8,4,0.38)] select-none pointer-events-none"
                            />
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. ELEGANT LOADING PROGRESS INDICATOR BELOW THE SHOWCASE (1% TO 100%) */}
            <div
              className="mt-5 sm:mt-7 flex flex-col items-center w-full max-w-[230px] sm:max-w-[270px] px-2 z-30"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={100}
              aria-valuenow={progress}
              aria-label="Loading GREENERGY product collection"
            >
              {/* Active Product / Stage Subtitle Label */}
              <div
                className="mb-2 text-[10px] sm:text-[11px] font-display font-extrabold uppercase tracking-[0.16em] text-center whitespace-nowrap select-none"
                style={{
                  color: currentTextColor,
                  opacity: 0.92,
                }}
              >
                {isEnsembleOrHandoff ? 'ALL 4 PRODUCT LINES' : activeStep.name}
              </div>

              {/* Sleek Frosted Glass Progress Bar — driven directly at 60fps for zero-lag 100% completion */}
              <div className="w-full h-[6px] sm:h-[7px] rounded-full bg-white/35 backdrop-blur-md overflow-hidden relative p-[1px] border border-white/65 shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
                <div
                  ref={progressFillRef}
                  className="w-full h-full rounded-full relative origin-left transform-gpu will-change-transform"
                  style={{
                    transform: `scaleX(${Math.max(0.01, progress / 100)})`,
                    backgroundColor: currentAccentColor,
                    transition:
                      'background-color 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/45 rounded-full" />
                </div>
              </div>

              {/* Crisp 1% to 100% Counter */}
              <div
                className="mt-2 sm:mt-2.5 text-xs sm:text-sm font-display font-extrabold tracking-[0.18em] tabular-nums select-none"
                style={{
                  color: currentTextColor,
                  textShadow:
                    currentTextColor === '#FFFFFF' || currentTextColor === '#FFF5EB' || currentTextColor === '#FFF6F2'
                      ? '0 1px 8px rgba(120, 14, 6, 0.28)'
                      : '0 1px 4px rgba(255, 255, 255, 0.35)',
                }}
              >
                {progress}%
              </div>
            </div>
          </div>

          {/* Bottom spacer to balance vertical optical centering */}
          <div className="h-6 sm:h-10 flex-shrink-0" aria-hidden="true" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
