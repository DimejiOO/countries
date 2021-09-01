import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ApiService } from '../services/api';
import * as CountriesAction from '../actions/countries';



@Injectable()
export class CountriesEffects {
  getCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountriesAction.LOAD_COUNTRIES),
      switchMap((action: CountriesAction.LoadCountriesAction) => {
        return this.apiService.getCountries(action.payload).pipe(
          map(response => {
            return new CountriesAction.LoadCountriesSuccessAction(response);
          }),
          catchError(error => {
            return of(new CountriesAction.LoadCountriesFailureAction(error));
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService,
  ) {}
}
