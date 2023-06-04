"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.mkdir = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const fs_1 = require("fs");
async function mkdir(path) {
    if (!(0, fs_1.existsSync)(path)) {
        await promises_1.default.mkdir(path);
    }
}
exports.mkdir = mkdir;
async function write(path, data) {
    await promises_1.default.writeFile(path, data, { flag: "w" });
}
exports.write = write;
