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
import { AdvertiserDashboard } from "./advertiserdashboard.model";
@Entity()
export class SignUp {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  SignUpId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  UserId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  UserName!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Password!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Email!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  UserRole!: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt?: Date;
}
