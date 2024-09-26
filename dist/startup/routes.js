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
const users_router_1 = require("../api/users/users.router");
const social_auth_router_1 = require("../api/social.auth/social.auth.router");
const roles_router_1 = require("../api/roles/roles.router");
const user_roles_router_1 = require("../api/user.roles/user.roles.router");
const permissions_router_1 = require("../api/permissions/permissions.router");
const role_permissions_router_1 = require("../api/role.permissions/role.permissions.router");
///////////////////////////////////////////////////////////////////////////////////////
class Router {
    constructor(app) {
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this._app.get("/api/v1", (req, res) => {
                        res.send({ message: "Demo api service" });
                    });
                    (0, role_permissions_router_1.register)(this._app);
                    (0, permissions_router_1.register)(this._app);
                    (0, user_roles_router_1.register)(this._app);
                    (0, roles_router_1.register)(this._app);
                    (0, social_auth_router_1.register)(this._app);
                    (0, users_router_1.register)(this._app);
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