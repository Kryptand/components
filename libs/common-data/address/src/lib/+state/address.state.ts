import { IEntityState, buildState } from '@briebug/ngrx-auto-entity';
import { Address } from '../models/address';

export const { initialState, facade: AddressFacadeBase } = buildState(Address);

export function addressReducer(state = initialState): IEntityState<Address> {
  return state;
}
