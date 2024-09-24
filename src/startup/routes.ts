import express from "express";
import { register as blog } from "../api/blog/blog.router";
import { register as user } from "../api/user/user.router";
import { register as comments } from "../api/comments/comments.router";
import { register as draft } from "../api/draft/draft.router";
import { register as advertiserdashboard } from "../api/advertiserdashboard/advertiserdashboard.router";
import { register as reviews } from "../api/review/reviews.router";
import { register as advertise } from "../api/advertise/advertise.router";
import { register as signup } from "../api/signup/signup.router";
import { register as users } from "../api/users/users.router";
import { register as socialauth } from "../api/socialauth/socialauth.router";
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
        socialauth(this._app);
        users(this._app);
        signup(this._app);
        advertise(this._app);
        advertiserdashboard(this._app);
        blog(this._app);
        user(this._app);
        comments(this._app);
        draft(this._app);
        reviews(this._app);
      } catch (error) {
        console.log("Error initilizing the routes");
      }
    });
  };
}
