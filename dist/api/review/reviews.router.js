"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const express_1 = __importDefault(require("express"));
const reviews_controller_1 = require("./reviews.controller");
///////////////////////////////////////////////////////////////////////////////////
const register = (app) => {
    const router = express_1.default.Router();
    const controller = new reviews_controller_1.ReviewsController();
    router.get('/all', controller.getAll);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.get('/:id', controller.getById);
    router.delete('/:id', controller.delete);
    app.use('/api/v1/reviews', router);
};
exports.register = register;
//# sourceMappingURL=reviews.router.js.map