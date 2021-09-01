import { AppState } from '../reducers';

export const getCountries = (state: AppState): any => state.countries.countries;

export const isLoadingCountries = (state: AppState): boolean => state.countries.isLoadingCountries;

export const getRegions = (state: AppState): any => state.countries.regions;

