import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { CountriesState, countriesReducer } from './countries';

export interface AppState {
  readonly countries: CountriesState;
}

export const reducers: ActionReducerMap<AppState> = {
  countries: countriesReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];


export * from './countries';
