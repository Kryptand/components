import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SalutationFacadeBase } from './salutation.state';
import { Salutation } from './../models/salutation';
import {
  IEntityState,
  IEntityInfo,
  Page,
  IEntityWithPageInfo,
  IPage
} from '@briebug/ngrx-auto-entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:3333/api';
@Injectable()
export class SalutationFacade extends SalutationFacadeBase {
  constructor(
    store: Store<IEntityState<Salutation>>,
    private http: HttpClient
  ) {
    super(Salutation, store);
  }

  loadPage(
    { page = 1, size = 25 }: IPage,
    criteria?: any
  ): Observable<IEntityWithPageInfo<Salutation>> {
    const url: string = criteria
      ? `${API_URL}/salutation?page=${page}&limit=${size}&${criteria}`
      : `${API_URL}/salutation?page=${page}&limit=${size}`;
    return this.http.get<Salutation[]>(url).pipe(
      map((salutationMeta: any) => ({
        pageInfo: {
          page: {
            page: salutationMeta.page,
            size: salutationMeta.count
          },
          totalCount: salutationMeta.total
        },
        entities: salutationMeta.data
      }))
    );
  }

  setFavourites(selection: Partial<Salutation>[]) {
    throw new Error('not implemented');
  }
}
