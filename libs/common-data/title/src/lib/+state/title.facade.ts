import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IEntityState,
  IEntityWithPageInfo,
  IPage
} from '@briebug/ngrx-auto-entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from './../models/title';
import {
  honoraryTitle,
  TitleFacadeBase,
  aristocraticTitle,
  politicalTitle,
  academicTitle
} from './title.state';

const API_URL = 'http://localhost:3333/api';
@Injectable()
export class TitleFacade extends TitleFacadeBase {
  constructor(
    protected store: Store<IEntityState<Title>>,
    private http: HttpClient
  ) {
    super(Title, store);
  }

  get honoraryTitles$(): Observable<Title[]> {
    return this.store.pipe(select(honoraryTitle));
  }

  get academicTitles$(): Observable<Title[]> {
    return this.store.pipe(select(academicTitle));
  }

  get politicalTitles$(): Observable<Title[]> {
    return this.store.pipe(select(politicalTitle));
  }

  get aristocraticTitles$(): Observable<Title[]> {
    return this.store.pipe(select(aristocraticTitle));
  }
  loadPage(
    { page = 1, size = 25 }: IPage,
    criteria?: any
  ): Observable<IEntityWithPageInfo<Title>> {
    console.debug(page);
    console.debug(size);
    const url: string = criteria
      ? `${API_URL}/title?page=${page}&limit=${size}&${criteria}`
      : `${API_URL}/title?page=${page}&limit=${size}`;
    return this.http.get<Title[]>(url).pipe(
      map((titleMeta: any) => ({
        pageInfo: {
          page: {
            page: titleMeta.page,
            size: titleMeta.count
          },
          totalCount: titleMeta.total
        },
        entities: titleMeta.data
      }))
    );
  }
}
