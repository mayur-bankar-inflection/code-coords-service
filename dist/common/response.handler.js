"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
const api_error_1 = require("./api.error");
const logger_1 = require("./logger");
class ResponseHandler {
    constructor() { }
    static success(request, response, message, httpCode, data) {
        const responseObject = {
            Status: "success",
            Message: message,
            HttpCode: httpCode !== null && httpCode !== void 0 ? httpCode : 200,
            Request: {
                Method: request ? request.method : null,
                Host: request ? request.hostname : null,
                Body: request ? request.body : null,
                Url: request ? request.originalUrl : null,
                Params: request ? request.params : null,
            },
            Data: data !== null && data !== void 0 ? data : null,
        };
        logger_1.Logger.instance().log(responseObject);
        response.status(httpCode).send(responseObject);
    }
    static failure(request, response, message, httpErrorCode, error) {
        const msg = error
            ? error.message
            : message
                ? message
                : "An error has occurred.";
        const responseObject = {
            Status: "failure",
            Message: msg,
            Request: {
                Method: request ? request.method : null,
                Host: request ? request.hostname : null,
                Body: request ? request.body : null,
                Url: request ? request.originalUrl : null,
                Params: request ? request.params : null,
            },
            HttpCode: httpErrorCode ? httpErrorCode : 500,
        };
        logger_1.Logger.instance().error("failure ", httpErrorCode, msg);
        response.status(httpErrorCode).send(responseObject);
    }
    static handleError(request, response, error) {
        if (error instanceof api_error_1.ApiError) {
            var err = error;
            ResponseHandler.failure(request, response, err.message, err.Code, error);
        }
        else {
            ResponseHandler.failure(request, response, error.message, 400, error);
        }
    }
}
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=response.handler.js.map