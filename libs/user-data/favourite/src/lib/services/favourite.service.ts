import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractEntityService } from '@kryptand/infrastructure-contracts';
import { Favourite } from '../models/favourite';

const API_URL = 'http://localhost:3333/api';
@Injectable()
export class FavouriteService extends AbstractEntityService<Favourite> {
  constructor(protected http: HttpClient) {
    super(API_URL, http);
  }
}
