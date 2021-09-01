import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { AppState } from './core/reducers';
import { getRegions } from './core/selectors';
import { Region } from './core/model/country';
import { LoadRegionsAction } from './core/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  regions$: Observable<Region[]>;

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(new LoadRegionsAction());
    this.regions$ = this.store.select(getRegions);
  }
}
