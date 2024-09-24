"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const api_error_1 = require("./api.error");
class ErrorHandler {
}
exports.ErrorHandler = ErrorHandler;
ErrorHandler.throwInputValidationError = (errorMessages) => {
    var message = 'Validation error has occurred!\n';
    if (errorMessages) {
        message = message + ' ' + Array.isArray(errorMessages) ? errorMessages.join(' ') : errorMessages.toString();
        message = message.split('"').join('');
    }
    throw new api_error_1.ApiError(message, 422);
};
ErrorHandler.throwDuplicateUserError = (message) => {
    throw new api_error_1.ApiError(message, 422);
};
ErrorHandler.throwNotFoundError = (message) => {
    throw new api_error_1.ApiError(message, 404);
};
ErrorHandler.throwUnauthorizedUserError = (message) => {
    throw new api_error_1.ApiError(message, 401);
};
ErrorHandler.throwForebiddenAccessError = (message) => {
    throw new api_error_1.ApiError(message, 403);
};
ErrorHandler.throwDbAccessError = (message, error) => {
    throw new api_error_1.ApiError(message, 503, error);
};
ErrorHandler.throwConflictError = (message) => {
    throw new api_error_1.ApiError(message, 409);
};
ErrorHandler.throwFailedPreconditionError = (message) => {
    throw new api_error_1.ApiError(message, 412);
};
ErrorHandler.throwInternalServerError = (message, error) => {
    throw new api_error_1.ApiError(message, 500, error);
};
ErrorHandler.handleValidationError = (error) => {
    if (error.isJoi === true) {
        //Logger.instance().log(error.message);
        const errorMessages = error.details.map((x) => x.message);
        ErrorHandler.throwInputValidationError(errorMessages);
    }
    else {
        ErrorHandler.throwInputValidationError(error.message);
    }
};
//# sourceMappingURL=error.handler.js.map