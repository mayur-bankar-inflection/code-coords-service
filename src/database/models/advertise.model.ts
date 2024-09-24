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
export class Advertise {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Title!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  Description!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  ImageSrc!: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt?: Date;

  @ManyToOne(() => AdvertiserDashboard)
  @JoinColumn()
  advertiserDashboard: AdvertiserDashboard;
}
