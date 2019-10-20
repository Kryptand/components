import * as crypto from 'crypto';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { AbstractEntity } from './../../contracts/abstract-entity';

@Entity('user')
export class UserEntity extends AbstractEntity {
  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
}
