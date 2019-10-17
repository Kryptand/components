import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AbstractEntityService} from '@kryptand/infrastructure-contracts';
import { Title } from '../models/title';
const API_URL='http://localhost:3333/api';

@Injectable()
export class TitleService extends AbstractEntityService<Title> {
  constructor(protected http: HttpClient) {
    super(API_URL,http);
  }
}
