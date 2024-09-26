import express from "express";
import { register as users } from "../api/users/users.router";
import { register as socialauth } from "../api/social.auth/social.auth.router";
import { register as roles } from "../api/roles/roles.router";
import { register as userroles } from "../api/user.roles/user.roles.router";
import { register as permissions } from "../api/permissions/permissions.router";
import { register as rolepermissions } from "../api/role.permissions/role.permissions.router";

///////////////////////////////////////////////////////////////////////////////////////

export class Router {
  private _app: express.Application;

  constructor(app: express.Application) {
    this._app = app;
  }
  public init = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        this._app.get("/api/v1", (req, res) => {
          res.send({ message: "Demo api service" });
        });
        rolepermissions(this._app);
        permissions(this._app);
        userroles(this._app);
        roles(this._app);
        socialauth(this._app);
        users(this._app);
      } catch (error) {
        console.log("Error initilizing the routes");
      }
    });
  };
}
