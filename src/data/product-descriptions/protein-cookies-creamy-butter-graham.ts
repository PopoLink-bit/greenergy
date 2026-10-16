import { ProductDescriptionData } from './fava-beans-chili-lemon';
import {
  createProteinCookiesBenefits,
  createProteinCookiesHighlights,
} from './protein-cookies-apple-cinnamon';

export const proteinCookiesCreamyButterGraham: ProductDescriptionData = {
  id: 'protein-cookies-creamy-butter-graham',
  category: 'Protein Cookies',
  name: 'Creamy Butter + Graham',

  shortDescription:
    'A soft protein cookie with creamy buttery richness and sweet, warm biscuit notes.',
  description:
    'CREAMY BUTTER + GRAHAM is a soft protein cookie with a creamy buttery taste and smooth, comforting character. Its flavor is enriched with sweet, warm biscuit notes that create a mellow and indulgent snacking experience. Deliciously satisfying and aligned with the premium GREENERGY style, it is a flavorful protein cookie made for those who enjoy a softer, dessert-inspired taste profile.',
  tasteProfile: 'Creamy · Buttery · Sweet · Warm Biscuit',
  ingredients: '',
  additionalInfo: '',
  notes: '',
  nutritionalBenefits: createProteinCookiesBenefits('protein-cookies-creamy-butter-graham', {
    sugarFree: true,
    highFibre: true,
    vegan: true,
  }),
  additionalHighlights: createProteinCookiesHighlights('protein-cookies-creamy-butter-graham', {
    twoCookiesInside: true,
  }),
};

export const productDescription = proteinCookiesCreamyButterGraham;
