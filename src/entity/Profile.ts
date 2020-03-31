import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import {User} from './User';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  name: string;

  @Column({length: 50})
  surname: string;

  @Column({length: 50})
  city: string;

  @Column({length: 50})
  country: string;

  @OneToOne(type => User, user => user.profile)
  user: User;
}
