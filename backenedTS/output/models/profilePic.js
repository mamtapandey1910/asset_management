"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilePic = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const profilePhotoSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    file: {
        data: Buffer,
        contentType: String
    },
    uploadTime: {
        type: Date,
        default: Date.now
    }
});
exports.profilePic = mongoose_1.default.model('profilePhoto', profilePhotoSchema);
