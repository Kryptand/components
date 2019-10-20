import { Key } from '@briebug/ngrx-auto-entity';

export class Favourite {
  @Key id: number;
  user: any;
  entityId: number;
  entityType: 'company' | 'user';
}
