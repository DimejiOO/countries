import { Country } from '../model/country';
import { regions } from 'src/app/mocks/countries';
import * as CountriesActions from '../actions/countries';
import { countriesReducer, CountriesState } from './countries';

describe('Countries Reducer', () => {
  const mockCountriesState: CountriesState = {
    isLoadingCountries: false,
    countries: null,
    regions: null,
  };

  it('Should update the store after receiving the `LoadCountriesAction` action', () => {
    const mockRegion = 'SOME_REGION';
    const state = mockCountriesState;
    const actual = countriesReducer(
      state,
      new CountriesActions.LoadCountriesAction(mockRegion)
    );
    expect(actual.isLoadingCountries).toBe(true);
    expect(actual.countries).toBe(null);
  });

  it('Should update the store after receiving the `LoadCountriesSuccessAction` action', () => {
    const mockCountries = [{} as Country];
    const state = mockCountriesState;
    const actual = countriesReducer(
      state,
      new CountriesActions.LoadCountriesSuccessAction(mockCountries)
    );
    expect(actual.isLoadingCountries).toBe(false);
    expect(actual.countries).toBe(mockCountries);
  });

  it('Should update the store after receiving the `LoadCountriesFailureAction` action', () => {
    const state = mockCountriesState;
    const actual = countriesReducer(
      state,
      new CountriesActions.LoadCountriesFailureAction({})
    );
    expect(actual.isLoadingCountries).toBe(false);
    expect(actual.countries).toBe(null);
  });

  it('Should update the store after receiving the `LoadRegionAction` action', () => {
    const state = mockCountriesState;
    const actual = countriesReducer(
      state,
      new CountriesActions.LoadRegionsAction()
    );
    expect(actual.regions).toBe(regions);
  });

  it('Should update the store after receiving the `ClearCountriesAction` action', () => {
    const state = mockCountriesState;
    const actual = countriesReducer(
      state,
      new CountriesActions.ClearCountriesAction()
    );
    expect(actual.isLoadingCountries).toBe(false);
    expect(actual.countries).toBe(null);
  });
});
