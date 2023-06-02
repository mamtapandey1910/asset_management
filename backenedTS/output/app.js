"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mongoConnect_1 = require("./mongoConnect");
exports.app = (0, express_1.default)();
const Router = express_1.default.Router();
(0, mongoConnect_1.connectToMongoDB)();
exports.app.use(express_1.default.json());
exports.app.use('/', require('./routers/nameRouter'));
