import { IEntityState, buildState } from '@briebug/ngrx-auto-entity';
import { Title } from '../models/title';
import { createSelector } from '@ngrx/store';

export const { initialState, facade: TitleFacadeBase,selectors: {
  selectAll,
  selectEntities
} } = buildState(Title);

export function titleReducer(state = initialState): IEntityState<Title> {
  return state;
}
export const honoraryTitle = createSelector(
  selectAll,
  (entities) =>
      entities?entities.filter(x=>x.type==='honorary') : null
);
export const academicTitle = createSelector(
  selectAll,
  (entities) =>
      entities?entities.filter(x=>x.type==='academic') : null
);
export const politicalTitle= createSelector(
  selectAll,
  (entities) =>
      entities?entities.filter(x=>x.type==='political') : null
);
export const aristocraticTitle= createSelector(
  selectAll,
  (entities) =>
      entities?entities.filter(x=>x.type==='aristocratic') : null
);
