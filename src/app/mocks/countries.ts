import { Country, Region } from '../core/model/country';

export const regions: Region[] = [
  { label: 'Europe', code: 'europe' },
  { label: 'Asia', code: 'asia' },
];
export const mockCountry: Country = {
  name: 'Armenia',
  topLevelDomain: ['.am'],
  alpha2Code: 'AM',
  alpha3Code: 'ARM',
  callingCodes: ['374'],
  capital: 'Yerevan',
  altSpellings: [
    'AM',
    'Hayastan',
    'Republic of Armenia',
    'Հայաստանի Հանրապետություն',
  ],
  region: 'Asia',
  subregion: 'Western Asia',
  population: 2994400,
  latlng: [40.0, 45.0],
  demonym: 'Armenian',
  area: 29743.0,
  gini: 30.9,
  timezones: ['UTC+04:00'],
  borders: ['AZE', 'GEO', 'IRN', 'TUR'],
  nativeName: 'Հայաստան',
  numericCode: '051',
  currencies: [
    {
      code: 'AMD',
      name: 'Armenian dram',
      symbol: null,
    },
  ],
  languages: [
    {
      iso639_1: 'hy',
      iso639_2: 'hye',
      name: 'Armenian',
      nativeName: 'Հայերեն',
    },
    {
      iso639_1: 'ru',
      iso639_2: 'rus',
      name: 'Russian',
      nativeName: 'Русский',
    },
  ],
  translations: {
    de: 'Armenien',
    es: 'Armenia',
    fr: 'Arménie',
    ja: 'アルメニア',
    it: 'Armenia',
    br: 'Armênia',
    pt: 'Arménia',
    nl: 'Armenië',
    hr: 'Armenija',
    fa: 'ارمنستان',
  },
  flag: 'https://restcountries.eu/data/arm.svg',
  regionalBlocs: [
    {
      acronym: 'EEU',
      name: 'Eurasian Economic Union',
      otherAcronyms: ['EAEU'],
      otherNames: [],
    },
  ],
  cioc: 'ARM',
};
