import type { ComposerTranslation } from 'vue-i18n'
import type { CarwashList } from './models'

export const getCarwashList: (t: ComposerTranslation) => CarwashList[] = (
  t: ComposerTranslation,
) => [
  {
    city: 'Rīga',
    carWashes: [
      {
        id: 5,
        address: 'Tvaika iela 3',
        spot: `${t('gs')} "Virši"`,
        phone: '+371 67 391 995',
        coordinates: [24.116537742679444, 56.997830797886785],
      },
      {
        id: 1,
        address: 'Brīvības gatve 250A',
        spot: `${t('gs')} "Virši"`,
        coordinates: [24.173627299999996, 56.974951076362096],
      },
      {
        id: 0,
        address: 'Augusta Deglava iela 77 k-1',
        spot: `${t('gs')} "KOOL"`,
        coordinates: [24.20164504232815, 56.94765002578093],
      },

      {
        id: 2,
        address: 'Daugavgrīvas iela 136A',
        spot: `${t('gs')} "Virši"`,
        coordinates: [24.073659193678786, 56.97367826765313],
      },
      {
        id: 3,
        address: 'Maskavas iela 450K',
        spot: `${t('gs')} "Virši"`,
        coordinates: [24.242145024532324, 56.88318724115429],
      },
      {
        id: 4,
        address: 'Uzvaras Bulvāris 16',
        spot: `${t('gs')} "Virši"`,
        coordinates: [24.0896458503853, 56.938409994674224],
      },
    ],
  },
  {
    city: 'Ādaži',
    carWashes: [
      {
        id: 6,
        address: 'Rīgas Gatve 45',
        spot: `${t('gs')} "Virši"`,
        coordinates: [24.317850102277525, 57.078953933696624],
      },
    ],
  },
  {
    city: 'Baloži',
    carWashes: [
      {
        id: 7,
        address: '"Ceribas", Krustkalni, Ķekavas pagasts',
        spot: `${t('gs')} "Virši"`,
        coordinates: [24.14678578516041, 56.889270721555626],
      },
    ],
  },
]
