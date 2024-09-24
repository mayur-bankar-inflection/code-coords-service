import express from "express";
import { Router } from "./startup/routes";

import helmet from "helmet";
import { DBConnector } from "./database/database.connector";


export default class Application {
  public _app: express.Application;

  private _router: Router;

  private static _instance: Application;

  private constructor() {
    this._app = express();
    this._router = new Router(this._app);
  }

  public static instance(): Application {
    // if (this._instance === null) {
    //     this._instance = new this();
    //     return this._instance;
    // }
    // else {
    //     return this._instance;
    // }
    return this._instance || (this._instance = new this());
  }

  warmUp = async () => {
    try {
      await this.setupDatabaseConnection();
      await this.setupMiddlewares();
      await this._router.init();
    } catch (error) {
      // logger.error('An error occurred while warming up.' + error.message);
    }
  };
  start = async () => {
    try {
      this._app.use(express.json());
      this._app.use(express.urlencoded());

      this._router.init();
      this.listen();
      this.warmUp();
    } catch (error) {}
  };

  private setupMiddlewares = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        this._app.use(express.urlencoded({ extended: true }));
        this._app.use(express.json());
        this._app.use(helmet());
      
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  setupDatabaseConnection = async () => {
    DBConnector.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  };

  private listen = async () => {
    return new Promise((resolve, reject) => {
      try {
        this._app.listen(process.env.PORT, () => {
        console.log("App listening on port " +process.env.PORT);
        
        });
      } catch (error) {
        reject(error)
      }
    });
  };
}
