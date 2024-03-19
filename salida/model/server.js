"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const materiaroute_1 = __importDefault(require("../routes/materiaroute"));
class Server {
    routes() {
        this.app.use(this.apiRoutes.materia, materiaroute_1.default);
    }
    constructor() {
        this.apiRoutes = {
            materia: '/api/materia'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8001';
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto: " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map