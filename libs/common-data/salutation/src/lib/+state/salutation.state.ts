import { IEntityState, buildState } from '@briebug/ngrx-auto-entity';
import { Salutation } from '../models/salutation';

export const { initialState, facade: SalutationFacadeBase } = buildState(Salutation);

export function salutationReducer(state = initialState): IEntityState<Salutation> {
  return state;
}
