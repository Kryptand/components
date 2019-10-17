import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './../models/person';
import {AbstractEntityService} from '@kryptand/infrastructure-contracts';

const API_URL='http://localhost:3333/api';
@Injectable()
export class PersonService extends AbstractEntityService<Person> {
  constructor(protected http: HttpClient) {
    super(API_URL,http);
  }
}
