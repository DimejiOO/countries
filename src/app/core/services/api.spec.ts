import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { baseUrl } from '../model/country';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    apiService = TestBed.get(ApiService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  describe('getCountries', () => {
    it('should load countries for a region', () => {
      const mockRegion = 'SOME_REGION';
      const response: any = {
        hasErrors: false,
        all: [],
      };

      apiService.getCountries(mockRegion).subscribe((r) => {
        expect(r).toEqual(response);
      });

      const req = httpTestingController.expectOne(
        `${baseUrl}${mockRegion}`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(response);
    });
  });
});
