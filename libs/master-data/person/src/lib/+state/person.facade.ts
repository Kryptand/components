import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PersonFacadeBase } from './person.state';
import { Person } from './../models/person';
import { IEntityState, IEntityInfo, Page, IEntityWithPageInfo, IPage } from '@briebug/ngrx-auto-entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL='http://localhost:3333/api';
@Injectable()
export class PersonFacade extends PersonFacadeBase {
    constructor(store: Store<IEntityState<Person>>,private http:HttpClient) {
        super(Person, store);
    }

    loadPage({page=1,size=25}:IPage, criteria?: any) : Observable<IEntityWithPageInfo<Person>>
    {
      console.debug(page);
      console.debug(size);

      const url:string=criteria?`${API_URL}/person?page=${page}&limit=${size}&${criteria}`:`${API_URL}/person?page=${page}&limit=${size}`;
      return this.http.get<Person[]>(
        url
      ).pipe(
          map((personMeta:any) => ({
              pageInfo: {
                  page: {
                      page: personMeta.page,
                      size:personMeta.count
                  },
                  totalCount: personMeta.total
              },
              entities: personMeta.data
          }))
      );
    }


  }
