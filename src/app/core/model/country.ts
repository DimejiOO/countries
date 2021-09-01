export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: any[];
  translations: {};
  flag: string;
  regionalBlocs: any[];
  cioc: string;
  capital: string;
}

export interface Currency {
  name: string;
  code: string;
  symbol: string;
}

export interface Region {
  label: string;
  code: string;
}

export interface CountryTable {
  name: string;
  capital: string;
  population: number;
}

export const baseUrl = `https://restcountries.eu/rest/v2/region/`;

