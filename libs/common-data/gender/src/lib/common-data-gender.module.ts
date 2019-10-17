import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { GenderFacade } from './+state/gender.facade';
import { genderReducer } from './+state/gender.state';
import { Gender } from './models/gender';
import { GenderService } from './services/gender.service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('gender', genderReducer),
    NgrxAutoEntityModule.forFeature()
  ],
  providers: [{ provide: Gender, useClass: GenderService }, GenderFacade]
})
export class CommonDataGenderModule {}
