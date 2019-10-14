import { Key } from '@briebug/ngrx-auto-entity';
import {Gender} from '@kryptand/common-data/gender';
export class Salutation{
  @Key id: number
  label: string;
  gender:Gender;
}
