import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import {User} from './User';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50, default: ''})
  name: string;

  @Column({length: 50, default: ''})
  surname: string;

  @Column({length: 50, default: ''})
  city: string;

  @Column({length: 50, default: ''})
  country: string;

  @OneToOne(type => User, user => user.profile)
  user: User;
}
