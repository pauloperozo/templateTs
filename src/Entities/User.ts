import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

export interface IUser {
    email: string;
    password: string;
}

@Entity()
export class User extends BaseEntity implements IUser {
    @PrimaryGeneratedColumn('uuid')
    userId!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
