"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nombreMateria = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
exports.nombreMateria = "SOA";
console.log(exports.nombreMateria);
dotenv_1.default.config();
const server_1 = __importDefault(require("./model/server"));
const server = new server_1.default();
server.listen();
//# sourceMappingURL=primero.js.map