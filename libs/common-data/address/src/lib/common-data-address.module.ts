import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { AddressFacade } from './+state/address.facade';
import { addressReducer } from './+state/address.state';
import { Address } from './models/address';
import { AddressService } from './services/address.service';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('address', addressReducer),
    NgrxAutoEntityModule.forFeature()
  ],
  providers: [{ provide: Address, useClass: AddressService }, AddressFacade]
})
export class CommonDataAddressModule {}
