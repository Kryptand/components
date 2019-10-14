import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAutoEntityService, IEntityInfo } from '@briebug/ngrx-auto-entity';
import { Person } from './../models/person';

const API_URL='http://localhost:3333/api';

@Injectable()
export class PersonService implements IAutoEntityService<Person> {
  constructor(private http: HttpClient) {
  }

  load(entityInfo: IEntityInfo, id: any): Observable<Person> {
    return this.http.get<any>(
      `${API_URL}/${entityInfo.modelName}/${id}`
    );
  }

  loadAll(entityInfo: IEntityInfo): Observable<Person[]> {
    return this.http.get<any[]>(
      `${API_URL}/${entityInfo.modelName}`
    );
  }

  create(entityInfo: IEntityInfo, entity: any): Observable<Person> {
    return this.http.post<any>(
      `${API_URL}/${entityInfo.modelName}`,
      entity
    );
  }

  update(entityInfo: IEntityInfo, entity: any): Observable<Person> {
    return this.http.patch<any>(
      `${API_URL}/${entityInfo.modelName}/${entity.id}`,
       entity
    );
  }

  delete(entityInfo: IEntityInfo, entity: any): Observable<Person> {
    return this.http.delete<any>(
      `${API_URL}/${entityInfo.modelName}/${entity.id}`
    ).pipe(map(() => entity));
  }
}
