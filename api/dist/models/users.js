"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: String,
    phone: String,
    email: String,
    course: String,
    password: String,
    interest: String,
    city: String,
});
exports.UserModel = mongoose_1.default.model("users", UserSchema);
