"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const materiaroute_1 = __importDefault(require("../routes/materiaroute"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    dbConnfn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Base de datos conectada");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    routes() {
        this.app.use(this.apiRoutes.materia, materiaroute_1.default);
    }
    accesoPublico() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    constructor() {
        this.apiRoutes = {
            materia: '/api/materia'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8001';
        this.dbConnfn();
        this.accesoPublico();
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