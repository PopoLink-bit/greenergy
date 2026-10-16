import { ProductDescriptionData } from './fava-beans-chili-lemon';

export const peanutsFavaSaltVinegar: ProductDescriptionData = {
  id: 'peanuts-fava-salt-vinegar',
  category: 'Black Series',
  name: 'Salt & Vinegar',

  shortDescription:
    'A bold, punchy protein snack delivering an unmistakable tang of vinegar balanced by crisp mineral sea salt and a satisfying crunch.',
  description:
    'Roasted Crunchy high-protein mix made with Roasted Coated Chickpeas, Peanuts and Corn. A natural source of plant-based protein and fiber ingredients.\nAim for a classic, sharp British-style punch. the ideal balance of tanginess and saltiness.',
  tasteProfile: 'Tangy · Zesty · Crisp Sea Salt',
  ingredients: '',
  additionalInfo: '',
  notes: '',
  nutritionalBenefits: [
    {
      id: 'salt-vinegar-plant-protein',
      productId: 'peanuts-fava-salt-vinegar',
      title: 'HIGH PLANT PROTEIN',
      description: 'Delivers 17 g of clean plant protein per pack to power your day.',
      icon: 'plant-protein-alternative',
      enabled: true,
    },
    {
      id: 'salt-vinegar-high-fiber',
      productId: 'peanuts-fava-salt-vinegar',
      title: 'DIETARY FIBER RICH',
      description: 'Natural fiber from whole legumes supports sustained energy and digestion.',
      icon: 'protein-cookie-high-fibre',
      enabled: true,
    },
    {
      id: 'salt-vinegar-vegan',
      productId: 'peanuts-fava-salt-vinegar',
      title: '100% VEGAN & NATURAL',
      description: 'Carefully roasted with premium ingredients, no artificial colorings or preservatives.',
      icon: 'protein-cookie-vegan',
      enabled: true,
    },
  ],
};

export const productDescription = peanutsFavaSaltVinegar;
