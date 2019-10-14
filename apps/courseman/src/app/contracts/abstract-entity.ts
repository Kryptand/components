import { Entity, PrimaryGeneratedColumn, BeforeUpdate, Column } from 'typeorm';
@Entity()
export class AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  created: Date;
  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  updated: Date;
  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date;
  }
  static get modelName(): string {
    return this.name;
  }
}
