import { Country } from '../model/country';
import * as CountriesActions from './countries';

describe('Countries actions', () => {
  it('should create a `LoadRegionsAction` action', () => {
    const action = new CountriesActions.LoadRegionsAction();

    expect({ ...action }).toEqual({
      type: CountriesActions.LOAD_REGIONS,
    });
  });

  it('should create a `ClearCountriesAction` action', () => {
    const action = new CountriesActions.ClearCountriesAction();
    expect({ ...action }).toEqual({
      type: CountriesActions.CLEAR_COUNTRIES,
    });
  });

  it('should create a `LoadCountriesAction` action', () => {
    const mockRegion = 'SOME_REGION';
    const action = new CountriesActions.LoadCountriesAction(mockRegion);
    expect({ ...action }).toEqual({
      type: CountriesActions.LOAD_COUNTRIES,
      payload: mockRegion,
    });
  });

  it('should return a success on the `LoadCountriesActionSuccessAction` action', () => {
    const action = new CountriesActions.LoadCountriesSuccessAction(
      [] as Country[]
    );
    expect({ ...action }).toEqual({
      type: CountriesActions.LOAD_COUNTRIES_SUCCESS,
      payload: [],
    });
  });

  it('should return a failure on the `LoadCountriesActionFailureAction` action', () => {
    const action = new CountriesActions.LoadCountriesFailureAction({});
    expect({ ...action }).toEqual({
      type: CountriesActions.LOAD_COUNTRIES_FAILURE,
      payload: {},
    });
  });
});
