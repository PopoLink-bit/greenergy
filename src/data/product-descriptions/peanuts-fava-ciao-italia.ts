import { ProductDescriptionData } from './fava-beans-chili-lemon';

export const peanutsFavaCiaoItalia: ProductDescriptionData = {
  id: 'peanuts-fava-ciao-italia',
  category: 'Black Series',
  name: 'Ciao Italia',

  shortDescription:
    'An aromatic Italian-inspired protein mix with a refined cappuccino touch.',
  description:
    'CIAO ITALIA Black Series is a roasted, crunchy high-protein mix made with roasted coated chickpeas, peanuts, and corn. Naturally rich in plant-based protein and fiber, it combines an aromatic Italian-inspired flavor profile with a light touch of cappuccino sweetness for a distinctive and elegant finish. Smooth, flavorful, and characterful, it delivers a gourmet snacking experience with a warm Mediterranean spirit.',
  tasteProfile: 'Aromatic · Italian-Inspired · Light Sweetness · Cappuccino Touch',
  ingredients: '',
  additionalInfo: '',
  notes: '',
  nutritionalBenefits: [
    {
      id: 'ciao-italia-plant-protein',
      productId: 'peanuts-fava-ciao-italia',
      title: 'PLANT-BASED PROTEIN',
      description:
        'A hearty, roasted blend of coated chickpeas, peanuts, and corn packed with wholesome plant protein.',
      icon: 'plant-protein-alternative',
      enabled: true,
    },
    {
      id: 'ciao-italia-high-fiber',
      productId: 'peanuts-fava-ciao-italia',
      title: 'NATURALLY HIGH IN FIBER',
      description:
        'Wholesome dietary fiber from natural roasted ingredients for a satisfying, nutrient-dense bite.',
      icon: 'protein-cookie-high-fibre',
      enabled: true,
    },
    {
      id: 'ciao-italia-flavor',
      productId: 'peanuts-fava-ciao-italia',
      title: 'AROMATIC ITALIAN FLAVOR',
      description:
        'Refined Mediterranean herbs and a gentle touch of cappuccino sweetness for a gourmet finish.',
      icon: 'sweet-herbs-olives-botanical-herbs',
      enabled: true,
    },
  ],
};

export const productDescription = peanutsFavaCiaoItalia;
