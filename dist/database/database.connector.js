"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = exports.DBConnector = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const database_config_1 = require("./database.config");
const users_model_1 = require("./models/users.model");
const socialauth_model_1 = require("./models/socialauth.model");
const roles_model_1 = require("./models/roles.model");
const userroles_model_1 = require("./models/userroles.model");
const permissions_model_1 = require("./models/permissions.model");
const rolepermissions_model_1 = require("./models/rolepermissions.model");
class DatabaseConnector {
}
exports.DBConnector = DatabaseConnector;
_a = DatabaseConnector;
// private static _source: DataSource | null = null;
DatabaseConnector._source = new typeorm_1.DataSource({
    name: database_config_1.Config.dialect,
    type: database_config_1.Config.dialect,
    host: database_config_1.Config.host,
    port: database_config_1.Config.port,
    username: database_config_1.Config.username,
    password: database_config_1.Config.password,
    database: database_config_1.Config.database,
    synchronize: true,
    entities: [
        users_model_1.Users,
        socialauth_model_1.SocialAuth,
        roles_model_1.Roles,
        userroles_model_1.UserRoles,
        permissions_model_1.Permissions,
        rolepermissions_model_1.RolePermissions,
    ],
    migrations: [],
    subscribers: [],
    logging: true,
    poolSize: database_config_1.Config.pool.max,
    cache: true,
});
DatabaseConnector.initialize = () => {
    return new Promise((resolve, reject) => {
        _a._source
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
const Source = DatabaseConnector._source;
exports.Source = Source;
//# sourceMappingURL=database.connector.js.map