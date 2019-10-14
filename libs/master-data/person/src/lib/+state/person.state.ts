import { IEntityState, buildState } from '@briebug/ngrx-auto-entity';
import { Person } from '../models/person';

export const { initialState, facade: PersonFacadeBase } = buildState(Person);

export function personReducer(state = initialState): IEntityState<Person> {
  return state;
}
