"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
Router.post('/name', async (req, res) => {
    const body = req.body;
    console.log(body);
    console.log(req.body);
    res.send('username created');
});
module.exports = Router;
