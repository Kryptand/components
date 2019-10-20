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
import { FavouriteFacadeBase } from './favourite.state';
import { Favourite } from '../models/favourite';

const API_URL = 'http://localhost:3333/api';
@Injectable()
export class AddressFacade extends FavouriteFacadeBase {
  constructor(store: Store<IEntityState<Favourite>>, private http: HttpClient) {
    super(Favourite, store);
  }

  loadPage(
    { page = 1, size = 25 }: IPage,
    criteria?: any
  ): Observable<IEntityWithPageInfo<Favourite>> {
    const url: string = criteria
      ? `${API_URL}/address?page=${page}&limit=${size}&${criteria}`
      : `${API_URL}/address?page=${page}&limit=${size}`;
    return this.http.get<Favourite[]>(url).pipe(
      map((favouriteMeta: any) => ({
        pageInfo: {
          page: {
            page: favouriteMeta.page,
            size: favouriteMeta.count
          },
          totalCount: favouriteMeta.total
        },
        entities: favouriteMeta.data
      }))
    );
  }
}
