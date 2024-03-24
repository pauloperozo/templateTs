import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'

@Entity()
export class Dictionary extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  dictionaryId: number;

  @Column({ unique: true })
  value: string;

  @Column({ default: false })
  used: boolean;
 
  @CreateDateColumn()
  created_at: Date;

}
