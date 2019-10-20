import { IEntityState, buildState } from '@briebug/ngrx-auto-entity';
import { Favourite } from '../models/favourite';

export const { initialState, facade: FavouriteFacadeBase } = buildState(
  Favourite
);

export function favouriteReducer(
  state = initialState
): IEntityState<Favourite> {
  return state;
}
