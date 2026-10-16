import { ProductDescriptionData } from './fava-beans-chili-lemon';

export const peanutsFavaBlackTruffle: ProductDescriptionData = {
  id: 'peanuts-fava-black-truffle',
  category: 'Black Series',
  name: 'Black Truffle',

  shortDescription:
    'An indulgent roasted protein mix with rich black truffle notes, earthy depth, and a premium savoury finish.',
  description:
    'Roasted Crunchy high-protein mix made with Roasted Coated Chickpeas, Peanuts and Corn. A natural source of plant-based protein and fiber ingredients.\nRich, earthy and savoury flavour. It combines deep mushroom-like notes with a subtle woody taste. Black Truffle adds a premium, gourmet character.',
  tasteProfile: 'Earthy • Savoury • Gourmet • Subtly Woody',
  ingredients: '',
  additionalInfo: '',
  notes: '',
  nutritionalBenefits: [
    {
      id: 'black-truffle-roasted-protein-mix',
      productId: 'peanuts-fava-black-truffle',
      title: 'ROASTED PROTEIN MIX',
      description:
        'A crunchy roasted blend of coated chickpeas, peanuts, and corn with a satisfying, protein-rich bite.',
      icon: 'plant-protein-alternative',
      enabled: true,
    },
    {
      id: 'black-truffle-protein-fiber',
      productId: 'peanuts-fava-black-truffle',
      title: 'PLANT-BASED PROTEIN & FIBER',
      description:
        'Naturally rich in plant-based protein and fiber ingredients for a more wholesome snacking experience.',
      icon: 'protein-cookie-high-fibre',
      enabled: true,
    },
    {
      id: 'black-truffle-flavor',
      productId: 'peanuts-fava-black-truffle',
      title: 'PREMIUM BLACK TRUFFLE FLAVOUR',
      description:
        'Deep, earthy truffle notes with a subtle woody nuance create a refined gourmet taste.',
      icon: 'sweet-herbs-olives-botanical-herbs',
      enabled: true,
    },
  ],
};

export const productDescription = peanutsFavaBlackTruffle;
