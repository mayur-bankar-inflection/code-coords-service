import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum ProviderEnum {
  GITHUB = "github",
  GOOGLE = "google",
}

@Entity()
export class SocialAuth {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  UserId!: string;

  @Column({
    type: "enum",
    enum: ProviderEnum,
    nullable: false,
  })
  Provider!: ProviderEnum;

  @Column({ type: "varchar", length: 256, nullable: false })
  ProviderUserId!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  AccessToken!: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  RefreshToken!: string;

  @Column({ type: "timestamp" })
  ExpiresAt!: Date;

  @Column({ type: "timestamp" })
  ConnectedAt!: Date;
}
