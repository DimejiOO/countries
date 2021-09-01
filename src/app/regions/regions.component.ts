import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState } from '../core/reducers';
import { getCountries } from '../core/selectors';
import { Country, Region } from '../core/model/country';
import { LoadCountriesAction, ClearCountriesAction } from '../core/actions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent {
  @Input() regionDropdownOptions: Region[];

  destroy$: Subject<boolean> = new Subject<boolean>();

  selectedCountries: Country[];
  selectedCountryDetails: Country;

  showCountryTable = false;
  defaultOptionSelected = true;
  showLoadCountryDetailsButton = false;

  constructor(private readonly store: Store<AppState>) {}

  loadCountry() {
    this.showCountryTable = true;
  }

  loadCountries(region: string) {
    this.showLoadCountryDetailsButton = false;
    this.showCountryTable = false;

    if (region) {
      this.defaultOptionSelected = false;
      this.store.dispatch(new LoadCountriesAction(region));
    } else {
      this.defaultOptionSelected = true;
      this.store.dispatch(new ClearCountriesAction());
    }
    this.getSelectedCountries();
  }

  filterList(countryName: string) {
    if (countryName) {
      this.selectedCountryDetails = this.selectedCountries.find(
        (country) => country.name === countryName
      );
      this.showLoadCountryDetailsButton = true;
      this.showCountryTable = false;
    }
  }

  disableDropdown() {
    return this.defaultOptionSelected;
  }

  getSelectedCountries() {
    this.store
      .select(getCountries)
      .pipe(takeUntil(this.destroy$))
      .subscribe((countries) => {
        if (countries) {
          this.selectedCountries = countries;
        } else {
          this.selectedCountries = null;
        }
      });
  }
}
