"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collection2 = exports.collection1 = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const newSchema1 = new mongoose_1.default.Schema({
    "Name": String,
    uniqueId: String
});
const newSchema2 = new mongoose_1.default.Schema({
    formData: {
        collegeName: String,
        overview: String,
        courses: String,
        fees: String,
        scholarships: String,
        placements: String,
        infrastructure: String,
        gallery: String,
        review: String,
        faq: String,
        uniqueId: String
    },
});
exports.collection1 = mongoose_1.default.model("colleges_summaries", newSchema1);
exports.collection2 = mongoose_1.default.model("formdatas", newSchema2);
