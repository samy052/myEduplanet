"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (message) => {
    const error = new Error();
    error.message = message;
    return error;
};
exports.errorHandler = errorHandler;
