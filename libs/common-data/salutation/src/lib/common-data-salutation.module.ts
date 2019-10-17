import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { SalutationFacade } from './+state/salutation.facade';
import { salutationReducer } from './+state/salutation.state';
import { Salutation } from './models/salutation';
import { SalutationService } from './services/salutation.service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('salutation', salutationReducer),
    NgrxAutoEntityModule.forFeature()
  ],
  providers: [{ provide: Salutation, useClass: SalutationService }, SalutationFacade]
})
export class CommonDataSalutationModule {}
