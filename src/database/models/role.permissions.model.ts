import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class RolePermissions {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  RoleId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  PermissionId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  GrantedAt!: Date;
  UserId: string;
}
