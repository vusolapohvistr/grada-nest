import {Entity, Index, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({unique: true})
  @Column({length: 50, nullable: false, unique: true})
  name: string;

  @Column({length: 255})
  description: string;
}
