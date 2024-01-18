"use strict";
// models/notification.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const notificationSchema = new mongoose_1.default.Schema({
    title: { type: String },
    content: { type: String },
    imageUrl: { type: String },
});
const NotificationModel = mongoose_1.default.model('Notification', notificationSchema);
exports.default = NotificationModel;
