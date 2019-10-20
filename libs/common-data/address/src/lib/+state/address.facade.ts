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

import { Address } from './../models/address';
import { AddressFacadeBase } from './address.state';

const API_URL = 'http://localhost:3333/api';
@Injectable()
export class AddressFacade extends AddressFacadeBase {
  constructor(store: Store<IEntityState<Address>>, private http: HttpClient) {
    super(Address, store);
  }

  loadPage(
    { page = 1, size = 25 }: IPage,
    criteria?: any
  ): Observable<IEntityWithPageInfo<Address>> {
    const url: string = criteria
      ? `${API_URL}/address?page=${page}&limit=${size}&${criteria}`
      : `${API_URL}/address?page=${page}&limit=${size}`;
    return this.http.get<Address[]>(url).pipe(
      map((addressMeta: any) => ({
        pageInfo: {
          page: {
            page: addressMeta.page,
            size: addressMeta.count
          },
          totalCount: addressMeta.total
        },
        entities: addressMeta.data
      }))
    );
  }

  setFavourites(selection: Partial<Address>[]) {
    throw new Error('not implemented');
  }
}
