import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.model";

@Entity()
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Comment!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  BlogId!: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt?: Date;

  @ManyToOne(() => User)
  @JoinColumn()
  User: User;
}
