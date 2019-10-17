import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AbstractEntityService} from '@kryptand/infrastructure-contracts';
import { Salutation } from '../models/salutation';
const API_URL='http://localhost:3333/api';

@Injectable()
export class SalutationService extends AbstractEntityService<Salutation> {
  constructor(protected http: HttpClient) {
    super(API_URL,http);
  }
}
