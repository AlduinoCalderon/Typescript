"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMateria = exports.putMateria = exports.postMateria = exports.getMateria = exports.getMaterias = void 0;
const getMaterias = (req, resp) => {
    resp.json({
        mensaje: "getMaterias"
    });
};
exports.getMaterias = getMaterias;
const getMateria = (req, resp) => {
    const { id } = req.params;
    resp.json({
        mensaje: "getMateria",
        id
    });
};
exports.getMateria = getMateria;
const postMateria = (req, resp) => {
    const { body } = req;
    resp.json({
        mensaje: "postMateria",
        body
    });
};
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
//# sourceMappingURL=materia.js.map