"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_controllers_1 = require("./app.controllers");
require('dotenv').config();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use('/public', express_1.default.static(process.cwd() + '/public'));
exports.app.get('/', app_controllers_1.getHtml);
