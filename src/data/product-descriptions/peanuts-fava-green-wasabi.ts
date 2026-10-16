import { ProductDescriptionData } from './fava-beans-chili-lemon';

export const peanutsFavaGreenWasabi: ProductDescriptionData = {
  id: 'peanuts-fava-green-wasabi',
  category: 'Black Series',
  name: 'Green Wasabi',

  shortDescription:
    'A bold roasted protein mix with a fresh wasabi kick and a sharp Japanese-inspired finish.',
  description:
    'GREEN WASABI Black Series is a roasted, crunchy high-protein mix made with roasted coated chickpeas, peanuts, and corn. Naturally rich in plant-based protein and fiber, it delivers a fresh, sharp wasabi heat that brings an energizing Japanese-style kick to every bite. Crisp, savory, and vibrant, it is crafted for snack lovers who enjoy clean crunch with a distinctive edge.',
  tasteProfile: 'Fresh · Sharp · Savory · Wasabi Heat',
  ingredients: '',
  additionalInfo: '',
  notes: '',
  nutritionalBenefits: [
    {
      id: 'wasabi-plant-protein',
      productId: 'peanuts-fava-green-wasabi',
      title: 'PLANT-BASED PROTEIN',
      description:
        'Naturally rich in clean plant protein from roasted chickpeas, peanuts, and corn to power your day.',
      icon: 'plant-protein-alternative',
      enabled: true,
    },
    {
      id: 'wasabi-high-fiber',
      productId: 'peanuts-fava-green-wasabi',
      title: 'NATURALLY HIGH IN FIBER',
      description:
        'Wholesome legume and grain fiber supporting balanced energy and natural digestion.',
      icon: 'protein-cookie-high-fibre',
      enabled: true,
    },
    {
      id: 'wasabi-bold-kick',
      productId: 'peanuts-fava-green-wasabi',
      title: 'BOLD WASABI KICK',
      description:
        'Energizing, sharp Japanese-style wasabi heat delivering an unmistakable, savory crunch.',
      icon: 'sweet-herbs-olives-botanical-herbs',
      enabled: true,
    },
  ],
};

export const productDescription = peanutsFavaGreenWasabi;
