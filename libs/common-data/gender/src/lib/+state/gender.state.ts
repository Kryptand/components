import { IEntityState, buildState } from '@briebug/ngrx-auto-entity';
import { Gender } from '../models/gender';

export const { initialState, facade: GenderFacadeBase } = buildState(Gender);

export function genderReducer(state = initialState): IEntityState<Gender> {
  return state;
}
