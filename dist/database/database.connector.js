"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = exports.DBConnector = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const database_config_1 = require("./database.config");
const blog_model_1 = require("./models/blog.model");
const user_model_1 = require("./models/user.model");
const draft_model_1 = require("./models/draft.model");
const comments_model_1 = require("./models/comments.model");
const advertiserdashboard_model_1 = require("./models/advertiserdashboard.model");
const reviews_model_1 = require("./models/reviews.model");
const advertise_model_1 = require("./models/advertise.model");
const signup_model_1 = require("./models/signup.model");
const users_model_1 = require("./models/users.model");
const socialauth_model_1 = require("./models/socialauth.model");
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
        blog_model_1.Blog,
        user_model_1.User,
        comments_model_1.Comments,
        draft_model_1.Draft,
        advertiserdashboard_model_1.AdvertiserDashboard,
        reviews_model_1.Reviews,
        advertise_model_1.Advertise,
        signup_model_1.SignUp,
        users_model_1.Users,
        socialauth_model_1.SocialAuth
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