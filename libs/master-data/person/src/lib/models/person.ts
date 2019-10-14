import { Key } from '@briebug/ngrx-auto-entity';
import {Address} from '@kryptand/common-data/address';
import { Salutation } from '@kryptand/common-data/salutation';
import { Gender } from '@kryptand/common-data/gender';
import { Title } from '@kryptand/common-data/title';

export class Person{
  @Key id: number
  firstName: string;
  lastName: string;
  birthName: string;
  birthday: Date;
  image:string;
  gender:Gender;
  address:Address;
  salutation:Salutation;
  aristocraticTitle:Title;
  politicalTitle: Title;
  honoraryTitle: Title;
  academicTitle: Title;
}

