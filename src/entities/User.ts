import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    readonly id: number
    
    @Column()
    name: string

    @Column()
    email: string
    
    @Column()
    password: string

    @Column()
    admin: boolean
    
    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date
}
