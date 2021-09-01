import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { CountriesState } from './core/reducers/countries';
import { LoadRegionsAction } from './core/actions/countries';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let state: any;
  let selectSpy: jasmine.Spy;
  let dispatchSpy: jasmine.Spy;
  const store: Store<any> = null;

  const countriesState: CountriesState = {
    isLoadingCountries: false,
    countries: null,
    regions: null,
  };

  beforeEach(() => {
    state = {
      countries: countriesState,
    };

    dispatchSpy = jasmine.createSpy('dispatch');
    selectSpy = jasmine
      .createSpy('select')
      .and.callFake((selectorFunc: any) => {
        return of(selectorFunc.call(store, state));
      });

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: Store,
          useValue: { select: selectSpy, dispatch: dispatchSpy },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should dispatch the load regions action on initialisation', () => {
    expect(dispatchSpy).toHaveBeenCalledWith(new LoadRegionsAction());
  });
});
