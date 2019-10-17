import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAutoEntityService, IEntityInfo } from '@briebug/ngrx-auto-entity';
export abstract class AbstractEntityService<T> implements IAutoEntityService<T> {
  constructor(protected baseUrl: string, protected http: HttpClient) {
  }
  load(entityInfo: IEntityInfo, id: any): Observable<T> {
    return this.http.get<any>(
      `${this.baseUrl}/${entityInfo.modelName}/${id}`
    );
  }

  loadAll(entityInfo: IEntityInfo): Observable<T[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/${entityInfo.modelName}`
    );
  }

  create(entityInfo: IEntityInfo, entity: any): Observable<T> {
    return this.http.post<any>(
      `${this.baseUrl}/${entityInfo.modelName}`,
      entity
    );
  }

  update(entityInfo: IEntityInfo, entity: any): Observable<T> {
    return this.http.patch<any>(
      `${this.baseUrl}/${entityInfo.modelName}/${entity.id}`,
      entity
    );
  }

  delete(entityInfo: IEntityInfo, entity: any): Observable<T> {
    return this.http.delete<any>(
      `${this.baseUrl}/${entityInfo.modelName}/${entity.id}`
    ).pipe(map(() => entity));
  }
}

