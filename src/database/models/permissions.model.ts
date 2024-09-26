import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Permissions {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  Name!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Description!: string;

  @CreateDateColumn({ type: "timestamp" })
  CreatedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  UpdatedAt: Date;
}
