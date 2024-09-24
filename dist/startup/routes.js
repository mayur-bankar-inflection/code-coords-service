"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const blog_router_1 = require("../api/blog/blog.router");
const user_router_1 = require("../api/user/user.router");
const comments_router_1 = require("../api/comments/comments.router");
const draft_router_1 = require("../api/draft/draft.router");
const advertiserdashboard_router_1 = require("../api/advertiserdashboard/advertiserdashboard.router");
const reviews_router_1 = require("../api/review/reviews.router");
const advertise_router_1 = require("../api/advertise/advertise.router");
const signup_router_1 = require("../api/signup/signup.router");
const users_router_1 = require("../api/users/users.router");
const socialauth_router_1 = require("../api/socialauth/socialauth.router");
///////////////////////////////////////////////////////////////////////////////////////
class Router {
    constructor(app) {
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this._app.get("/api/v1", (req, res) => {
                        res.send({ message: "Demo api service" });
                    });
                    (0, socialauth_router_1.register)(this._app);
                    (0, users_router_1.register)(this._app);
                    (0, signup_router_1.register)(this._app);
                    (0, advertise_router_1.register)(this._app);
                    (0, advertiserdashboard_router_1.register)(this._app);
                    (0, blog_router_1.register)(this._app);
                    (0, user_router_1.register)(this._app);
                    (0, comments_router_1.register)(this._app);
                    (0, draft_router_1.register)(this._app);
                    (0, reviews_router_1.register)(this._app);
                }
                catch (error) {
                    console.log("Error initilizing the routes");
                }
            });
        });
        this._app = app;
    }
}
exports.Router = Router;
//# sourceMappingURL=routes.js.map