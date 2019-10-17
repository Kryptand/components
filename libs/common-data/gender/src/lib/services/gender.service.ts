import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AbstractEntityService} from '@kryptand/infrastructure-contracts';
import { Gender } from '../models/gender';
const API_URL='http://localhost:3333/api';

@Injectable()
export class GenderService extends AbstractEntityService<Gender> {
  constructor(protected http: HttpClient) {
    super(API_URL,http);
  }
}
