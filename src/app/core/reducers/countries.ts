import * as CountriesAction from '../actions';
import { regions } from 'src/app/mocks/countries';
import { Country, Region } from 'src/app/core/model/country';

export interface CountriesState {
  regions: Region[];
  countries: Country[];
  isLoadingCountries: boolean;
}

const initialState: CountriesState = {
  isLoadingCountries: false,
  countries: null,
  regions: null,
};

export function countriesReducer(
  state: CountriesState = initialState,
  action: CountriesAction.CountriesAction
): CountriesState {
  switch (action.type) {
    case CountriesAction.LOAD_REGIONS:
      return {
        ...state,
        regions,
      };
    case CountriesAction.LOAD_COUNTRIES:
      return {
        ...state,
        isLoadingCountries: true,
        countries: null,
      };
    case CountriesAction.LOAD_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoadingCountries: false,
        countries: action.payload,
      };
    case CountriesAction.LOAD_COUNTRIES_FAILURE:
      return {
        ...state,
        isLoadingCountries: false,
        countries: null,
      };
    case CountriesAction.CLEAR_COUNTRIES:
      return {
        ...state,
         isLoadingCountries: false,
         countries: null
      };
    default: {
      return state;
    }
  }
}
