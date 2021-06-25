import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {User} from "./User";
import {Tag} from "./Tag";

@Entity('compliments')
export class Compliment {
    @PrimaryGeneratedColumn()
    readonly id: number
    
    @Column({name: 'user_sender'})
    userSenderId: number
    
    @JoinColumn({name: 'user_sender', referencedColumnName: 'id'})
    @ManyToOne(() => User)
    userSender: User

    @Column({name: 'user_reciver'})
    userReciverId: number

    @JoinColumn({name: 'user_reciver', referencedColumnName: 'id'})
    @ManyToOne(() => User)
    userReciver: User
    
    @Column({name: 'tag_id'})
    tagId: number

    @JoinColumn({name: 'tag_id', referencedColumnName: 'id'})
    @ManyToOne(() => Tag)
    tag: Tag

    @Column()
    message: string
    
    @CreateDateColumn()
    created_at: Date

}
