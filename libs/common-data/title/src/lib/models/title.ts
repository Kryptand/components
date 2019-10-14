import { Key } from '@briebug/ngrx-auto-entity';
import {Gender} from '@kryptand/common-data/gender';
export class Title{
  @Key id: number
  label: string;
  gender:Gender;
  type: string;
}
