import { Entity, Column, ManyToMany, Index, PrimaryGeneratedColumn } from 'typeorm';
import {Permission} from './Permission';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({unique: true})
  @Column({length: 50, nullable: false, unique: true})
  name: string;

  @Column({length: 255})
  description: string;

  @ManyToMany(type => Permission)
  permissions: Permission[];
}
