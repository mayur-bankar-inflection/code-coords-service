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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./startup/routes");
const helmet_1 = __importDefault(require("helmet"));
const database_connector_1 = require("./database/database.connector");
class Application {
    constructor() {
        this.warmUp = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.setupDatabaseConnection();
                yield this.setupMiddlewares();
                yield this._router.init();
            }
            catch (error) {
                // logger.error('An error occurred while warming up.' + error.message);
            }
        });
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            try {
                this._app.use(express_1.default.json());
                this._app.use(express_1.default.urlencoded());
                this._router.init();
                this.listen();
                this.warmUp();
            }
            catch (error) { }
        });
        this.setupMiddlewares = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this._app.use(express_1.default.urlencoded({ extended: true }));
                    this._app.use(express_1.default.json());
                    this._app.use((0, helmet_1.default)());
                    resolve(true);
                }
                catch (error) {
                    reject(error);
                }
            });
        });
        this.setupDatabaseConnection = () => __awaiter(this, void 0, void 0, function* () {
            database_connector_1.DBConnector.initialize()
                .then(() => {
                console.log("Data Source has been initialized!");
            })
                .catch((err) => {
                console.error("Error during Data Source initialization", err);
            });
        });
        this.listen = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this._app.listen(process.env.PORT, () => {
                        console.log("App listening on port " + process.env.PORT);
                    });
                }
                catch (error) {
                    reject(error);
                }
            });
        });
        this._app = (0, express_1.default)();
        this._router = new routes_1.Router(this._app);
    }
    static instance() {
        // if (this._instance === null) {
        //     this._instance = new this();
        //     return this._instance;
        // }
        // else {
        //     return this._instance;
        // }
        return this._instance || (this._instance = new this());
    }
}
exports.default = Application;
//# sourceMappingURL=app.js.map