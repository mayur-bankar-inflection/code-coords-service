import "reflect-metadata";
import { DataSource } from "typeorm";
import { Config } from "./database.config";
import { Blog } from "./models/blog.model";
import { User } from "./models/user.model";
import { Draft } from "./models/draft.model";
import { Comments } from "./models/comments.model";
import { AdvertiserDashboard } from "./models/advertiserdashboard.model";
import { Reviews } from "./models/reviews.model";
import { Advertise } from "./models/advertise.model";
import { SignUp } from "./models/signup.model";
import { Users } from "./models/users.model";
import { SocialAuth } from "./models/socialauth.model";
import { Roles } from "./models/roles.model";
import { UserRoles } from "./models/userroles.model";

class DatabaseConnector {
  // private static _source: DataSource | null = null;
  static _source = new DataSource({
    name: Config.dialect,
    type: Config.dialect,
    host: Config.host,
    port: Config.port,
    username: Config.username,
    password: Config.password,
    database: Config.database,
    synchronize: true,
    entities: [
      Blog,
      User,
      Comments,
      Draft,
      AdvertiserDashboard,
      Reviews,
      Advertise,
      SignUp,
      Users,
      SocialAuth,
      Roles,
      UserRoles,
    ],
    migrations: [],
    subscribers: [],

    logging: true,
    poolSize: Config.pool.max,
    cache: true,
  });
  static initialize = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      this._source
        .initialize()
        .then(() => {
          console.log("Database connection has been established successfully.");
          resolve(true);
        })
        .catch((error) => {
          console.log("Unable to connect to the database:" + error.message);
          reject(false);
        });
    });
  };

  // static get dataSource(): DataSource {
  //   if (!this._source) {
  //     throw new Error("Data source not initialized. Call initialize() first.");
  //   }
  //   return this._source;
  // }
}
const Source = DatabaseConnector._source;
export { DatabaseConnector as DBConnector, Source };
