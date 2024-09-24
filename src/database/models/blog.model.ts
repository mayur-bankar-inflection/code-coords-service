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
export class Blog {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

 @Column({ type: "varchar", length: 256, nullable: false })
  Title!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  BlogId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Tags!: string;

  @Column({ type: "boolean", nullable: false, default: true })
  Published!: boolean;

  @Column({ type: "integer", nullable: false, default: 0 })
  Likes!: number;

  @Column({ type: "varchar", length: 256, nullable: false })
  CommentId!: string;

  @Column({ type: "integer", nullable: false, default: 0 })
  Save!: number;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt?: Date;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
