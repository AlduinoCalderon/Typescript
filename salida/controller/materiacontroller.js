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
exports.deleteMateria = exports.putMateria = exports.postMateria = exports.getMateria = exports.getMaterias = void 0;
const materia_1 = __importDefault(require("../model/materia"));
const getMaterias = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const materias = yield materia_1.default.findAll();
        resp.json(materias);
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({ mensaje: "Error del servidor" });
    }
});
exports.getMaterias = getMaterias;
const getMateria = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const materia = yield materia_1.default.findByPk(id);
        resp.json(materia);
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({ mensaje: "Error del servidor" });
    }
});
exports.getMateria = getMateria;
const postMateria = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const bodyJSon = req.body;
    const nombreMat = bodyJSon.nombreMateria;
    const estadoMat = bodyJSon.estadoMateria;
    const semestreMat = bodyJSon.semestreMateria;
    const { body } = req;
    try {
        const materiaInsertada = yield materia_1.default.create(body);
        resp.json(materiaInsertada);
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({ mensaje: "Error al insertar" });
    }
});
exports.postMateria = postMateria;
const putMateria = (req, resp) => {
    const { body } = req;
    const { id } = req.params;
    resp.json({
        mensaje: "putMateria",
        body,
        id
    });
};
exports.putMateria = putMateria;
const deleteMateria = (req, resp) => {
    const { id } = req.params;
    resp.json({
        mensaje: "deleteMateria",
        id
    });
};
exports.deleteMateria = deleteMateria;
//# sourceMappingURL=materiacontroller.js.map