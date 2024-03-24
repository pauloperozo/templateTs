import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'

@Entity()
export class Wordle extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  wordleId: number;

  @Column()
  userId: number;
   
  @Column()
  end: number;

  @Column({ default:0 })
  attempts: number;

  @Column()
  word: string;

  @Column({ default:false })
  winer: boolean;
  
  @Column({ default:false })
  complete: boolean;
  
  @CreateDateColumn()
  created_at: Date;

}
