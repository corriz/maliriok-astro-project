export const services = [
  {
    slug: 'malirske-prace',
    title: 'Malířské práce',
    href: '/sluzby/malirske-prace',
    description: 'Výmalba bytů, domů, kanceláří i společných prostor.',
    bullets: [
      'výmalba pokojů',
      'výmalba bytů a domů',
      'výmalba kanceláří',
      'malba stěn a stropů',
      'příprava povrchů před malbou'
    ]
  },
  {
    slug: 'nateracske-prace',
    title: 'Natěračské práce',
    href: '/sluzby/nateracske-prace',
    description: 'Dveře, zárubně, okna, zábradlí a další povrchy.',
    bullets: ['dveře a zárubně', 'okna', 'zábradlí', 'kovové prvky', 'další běžné povrchy']
  },
  {
    slug: 'zednicke-prace',
    title: 'Zednické práce',
    href: '/sluzby/zednicke-prace',
    description: 'Opravy stěn, omítek a příprava před malbou.',
    bullets: ['opravy prasklin', 'opravy omítek', 'drobné vysprávky', 'stěrkování', 'příprava stěn před malbou']
  },
  {
    slug: 'fasadni-prace',
    title: 'Fasádní práce',
    href: '/sluzby/fasadni-prace',
    description: 'Nátěry fasád a související úpravy povrchů.',
    bullets: ['nátěry fasád', 'opravy povrchů', 'příprava podkladu', 'obnovy starších ploch']
  }
] as const;
