import { By } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { RegionsComponent } from './regions.component';
import { mockCountry, regions } from '../mocks/countries';
import { CountriesState } from '../core/reducers/countries';

@Component({
  template: `
    <app-regions [regionDropdownOptions]='regionDropdownOptions'></app-regions>
  `,
})
class TestHostComponent {
  regionDropdownOptions = regions;
}

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let state: any;
  let selectSpy: jasmine.Spy;
  let dispatchSpy: jasmine.Spy;
  const store: Store<any> = null;

  const countriesState: CountriesState = {
    isLoadingCountries: false,
    countries: null,
    regions: null,
  };

  function genericQuery(query: string): DebugElement {
    return fixture.debugElement.query(By.css(query));
  }

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
      imports: [MatTableModule],
      declarations: [RegionsComponent, TestHostComponent],
      providers: [
        {
          provide: Store,
          useValue: { select: selectSpy, dispatch: dispatchSpy },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the expected header text', () => {
    const header = genericQuery('[data-test="header"]');
    expect(header.nativeElement.innerText).toBe('Regions and Countries');
  });

  describe('Country details load button', () => {
    it('should not be present on initial component load', () => {
      const loadButton = genericQuery(
        '[data-test="country-details-load-button"]'
      );
      expect(loadButton).toBeNull();
    });

    it('should be present when a country is selected', () => {
      const mockCountryName = mockCountry.name;
      component.selectedCountries = [mockCountry];

      component.filterList(mockCountryName);
      fixture.detectChanges();

      const loadButton = genericQuery(
        '[data-test="country-details-load-button"]'
      );
      expect(loadButton).not.toBeNull();
    });
  });

  describe('Country details table', () => {
    it('should not be present on initial component load', () => {
      const countryDetailsTable = genericQuery(
        '[data-test="country-details-selector"]'
      );
      expect(countryDetailsTable).toBeNull();
    });

    it('should be present when the load button is clicked', () => {
      const mockCountryName = mockCountry.name;
      component.selectedCountries = [mockCountry];
      component.filterList(mockCountryName);
      fixture.detectChanges();

      const loadButton = genericQuery(
        '[data-test="country-details-load-button"]'
      );

      loadButton.nativeElement.click();
      fixture.detectChanges();

      const countryDetailsTable = genericQuery(
        '[data-test="country-details-selector"]'
      );
      expect(countryDetailsTable).not.toBeNull();
    });
  });
});
