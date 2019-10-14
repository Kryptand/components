import { Key } from '@briebug/ngrx-auto-entity';

export class Address{
  @Key id: number
  street: string;
  streetNo: string;
  zip: string;
  city:string
  country:string;
  county:string;
}
