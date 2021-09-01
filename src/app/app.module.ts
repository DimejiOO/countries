import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/reducers';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegionsComponent } from './regions/regions.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

@NgModule({
  declarations: [AppComponent, RegionsComponent, CountryDetailsComponent],
  imports: [
    CoreModule,
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
