import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Email!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Phone!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  PasswordHash: string;

  @Column({ type: "boolean", nullable: false })
  IsActive!: boolean;

  @Column({ type: "boolean", nullable: false })
  IsEmailVerified!: boolean;

  @Column({ type: "boolean", nullable: false })
  IsPhoneVerified!: boolean;

  @CreateDateColumn({ type: "timestamp" })
  CreatedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  UpdatedAt: Date;

  @DeleteDateColumn({ type: "timestamp" })
  DeletedAt?: Date;

  @Column({ type: "timestamp", nullable: true })
  LastLogin: Date;
}
