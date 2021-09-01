import { Action } from '@ngrx/store';
import { Country } from 'src/app/core/model/country';

export const LOAD_REGIONS = 'LOAD_REGIONS';
export const CLEAR_COUNTRIES = 'CLEAR_COUNTRIES';
export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS';
export const LOAD_COUNTRIES_FAILURE = 'LOAD_COUNTRIES_FAILURE';

export class LoadRegionsAction implements Action {
  readonly type = LOAD_REGIONS;
}

export class ClearCountriesAction implements Action {
  readonly type = CLEAR_COUNTRIES;
}

export class LoadCountriesAction implements Action {
  readonly type = LOAD_COUNTRIES;
  constructor(public payload: string) {}
}

export class LoadCountriesSuccessAction implements Action {
  readonly type = LOAD_COUNTRIES_SUCCESS;
  constructor(public payload: Country[]) {}
}

export class LoadCountriesFailureAction implements Action {
  readonly type = LOAD_COUNTRIES_FAILURE;
  constructor(public payload: any) {}
}

export type CountriesAction =
  | LoadRegionsAction
  | ClearCountriesAction
  | LoadCountriesAction
  | LoadCountriesSuccessAction
  | LoadCountriesFailureAction;
