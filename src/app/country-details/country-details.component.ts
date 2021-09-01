import { Country } from '../core/model/country';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent {
  @Input() selectedCountry: Country;

  displayedColumns = [
    'Name',
    'Capital',
    'Population',
    'Currencies',
    'Flag',
  ];
}
