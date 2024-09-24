import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { User } from "./user.model";

@Entity()
export class Reviews {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  UserId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  BlogId!: string;

  @Column({ type: "boolean", nullable: false, default: true })
  Status: boolean;

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
