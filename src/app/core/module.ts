import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { ApiService } from './services/api';
import { CountriesEffects } from './effects';

@NgModule({
  imports: [EffectsModule.forFeature([CountriesEffects])],
  providers: [ApiService],
})
export class CoreModule {}
