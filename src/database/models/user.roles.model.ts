import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  UserId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  RoleId!: string;
}
