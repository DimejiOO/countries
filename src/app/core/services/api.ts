import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseUrl, Country } from 'src/app/core/model/country';

@Injectable()
export class ApiService {
  constructor(public http: HttpClient) {}

  getCountries(region: string) {
    return this.http.get(`${baseUrl}${region}`).pipe(
      map((response: Country) => response),
      catchError((error: any) => of(error))
    );
  }
}
