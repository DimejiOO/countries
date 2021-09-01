import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { of, Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { StoreModule, Action } from '@ngrx/store';

import { reducers } from '../reducers';
import {
  LoadCountriesAction,
  LoadCountriesSuccessAction,
} from '../actions/countries';
import { Country } from '../model/country';
import { ApiService } from '../services/api';
import { CountriesEffects } from './countries';

describe('CountriesEffects', () => {
  let effects: CountriesEffects;
  let action$: Observable<Action>;
  let getCountries: jasmine.Spy;

  beforeEach(() => {
    getCountries = jasmine.createSpy();

    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers)],
      providers: [
        CountriesEffects,
        {
          provide: ApiService,
          useValue: {
            getCountries,
          },
        },
        provideMockActions(() => action$),
      ],
    });

    action$ = TestBed.get(Actions);
    effects = TestBed.get(CountriesEffects);
  });

  describe('getCountries$', () => {
    it('should return the success action when dispatching LoadCountriesSuccessAction', () => {
      const mockRegion = 'SOME_REGION';
      const mockData: Country[] = [];

      const expectedResponse = mockData;
      const inputAction = new LoadCountriesAction(mockRegion);
      const outputAction = new LoadCountriesSuccessAction(expectedResponse);

      action$ = hot('-a---', { a: inputAction });
      const expected$ = cold('-b', { b: outputAction });

      getCountries.and.returnValue(of([]));

      expect(effects.getCountries$).toBeObservable(expected$);
    });
  });
});
