"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
//creating schema
const shortUrlSchema = new mongoose_1.default.Schema({
    fullUrl: {
        type: String,
        require: true
    },
    shortUrl: {
        type: String,
        require: true,
        default: () => (0, nanoid_1.nanoid)().substring(0, 10),
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
//creating model in MongoDB
exports.urlModel = mongoose_1.default.model("ShortUrl", shortUrlSchema);
