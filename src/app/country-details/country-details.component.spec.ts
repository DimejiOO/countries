import { By } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockCountry } from '../mocks/countries';
import { CountryDetailsComponent } from './country-details.component';

@Component({
  template: `
    <app-country-details [selectedCountry]='selectedCountry'></app-country-details>
  `,
})
class TestHostComponent {
  selectedCountry = mockCountry;
}

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  function genericQuery(query: string): DebugElement {
    return fixture.debugElement.query(By.css(query));
  }

  function queryForTableRows() {
    return fixture.nativeElement.querySelectorAll('tr');
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [CountryDetailsComponent, TestHostComponent],
    });

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the country details table', () => {
    const countryDetailsTable = genericQuery(
      '[data-test="country-details-table"]'
    );
    expect(countryDetailsTable).not.toBeNull();
  });

  it('should display the country details table headers and data', () => {
    expect(queryForTableRows().length).toBe(2);

    const headerRow = queryForTableRows()[0];
    expect(headerRow.cells[0].innerHTML.trim()).toBe('Name');
    expect(headerRow.cells[1].innerHTML.trim()).toBe('Capital');
    expect(headerRow.cells[2].innerHTML.trim()).toBe('Population');
    expect(headerRow.cells[3].innerHTML.trim()).toBe('Currencies');
    expect(headerRow.cells[4].innerHTML.trim()).toBe('Flag');

    const dataRowOne = queryForTableRows()[1];
    expect(dataRowOne.cells[0].innerHTML.trim()).toContain(mockCountry.name);
    expect(dataRowOne.cells[1].innerHTML.trim()).toContain(mockCountry.capital);
    expect(dataRowOne.cells[2].innerHTML.trim()).toContain(mockCountry.population);
    expect(dataRowOne.cells[3].innerHTML.trim()).toContain(mockCountry.currencies);
    expect(dataRowOne.cells[4].innerHTML.trim()).toContain(mockCountry.flag);
  });
});
