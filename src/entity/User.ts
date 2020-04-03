import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, Index} from "typeorm";
import {Profile} from './Profile';
import {Group} from './Group';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Index({unique: true})
    @Column({length: 50, unique: true, nullable: false})
    username: string;

    @Column({length: 50, unique: true, nullable: false})
    email: string;

    @Column({unique: true, nullable: false})
    password: string;

    @OneToOne(type => Profile, profile => profile.user)
    @JoinColumn()
    profile: Profile;

    @ManyToMany(type => Group)
    groups: Group[];
}
