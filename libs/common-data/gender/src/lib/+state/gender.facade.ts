import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IEntityState,
  IEntityWithPageInfo,
  IPage
} from '@briebug/ngrx-auto-entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Gender } from './../models/gender';
import { GenderFacadeBase } from './gender.state';

const API_URL = 'http://localhost:3333/api';
@Injectable()
export class GenderFacade extends GenderFacadeBase {
  constructor(store: Store<IEntityState<Gender>>, private http: HttpClient) {
    super(Gender, store);
  }

  loadPage(
    { page = 1, size = 25 }: IPage,
    criteria?: any
  ): Observable<IEntityWithPageInfo<Gender>> {
    const url: string = criteria
      ? `${API_URL}/gender?page=${page}&limit=${size}&${criteria}`
      : `${API_URL}/gender?page=${page}&limit=${size}`;
    return this.http.get<Gender[]>(url).pipe(
      map((genderMeta: any) => ({
        pageInfo: {
          page: {
            page: genderMeta.page,
            size: genderMeta.count
          },
          totalCount: genderMeta.total
        },
        entities: genderMeta.data
      }))
    );
  }

  setFavourites(selection: Partial<Gender>[]) {
    throw new Error('not implemented');
  }
}
