import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { Blog } from "./blog.model";
import { Draft } from "./draft.model";
import { Comments } from "./comments.model";
import { Reviews } from "./reviews.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Name!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Username!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Email!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Bio!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Account!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  ProfileImageId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Password!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Work!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Education!: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt?: Date;

  @OneToMany(() => Blog, (blog) => blog.user)
  blogs: Blog[];

  @OneToMany(() => Draft, (draft) => draft.User)
  draft: Draft[];

  @OneToMany(() => Comments, (comment) => comment.User)
  comments: Comments[];

  @OneToMany(() => Reviews, (comment) => comment.User)
  reviews: Reviews[];
}
