import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Roles {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  RoleName!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Description!: string;
}
