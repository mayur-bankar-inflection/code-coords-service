import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { User } from "./user.model";
import { Advertise } from "./advertise.model";

@Entity()
export class AdvertiserDashboard {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  TotalAds: number;

  @Column({ type: "varchar", length: 256, nullable: false })
  TotalViews: number;

  @Column({ type: "varchar", length: 256, nullable: false })
  TotalFollowups!: number;

  @Column({ type: "varchar", length: 256, nullable: false })
  TotalClicks!: number;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @DeleteDateColumn()
  DeletedAt?: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => Advertise, (advertise) => advertise.advertiserDashboard)
  advertise: Advertise[];
}
