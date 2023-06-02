"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToMongoDB = () => {
    try {
        mongoose_1.default.connect('mongodb://127.0.0.1/AssetManagement', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(res => {
            console.log('succesfully connected to mongoDB');
        }).catch(err => console.log(err));
    }
    catch (err) {
        console.log(err);
    }
};
exports.connectToMongoDB = connectToMongoDB;
