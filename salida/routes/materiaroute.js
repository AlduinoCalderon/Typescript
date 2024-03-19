"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiacontroller_1 = require("../controller/materiacontroller");
const routerMateria = (0, express_1.Router)();
routerMateria.get('/', materiacontroller_1.getMaterias);
routerMateria.get('/:id', materiacontroller_1.getMateria);
routerMateria.post('/', materiacontroller_1.postMateria);
routerMateria.put('/:id', materiacontroller_1.putMateria);
routerMateria.delete('/:id', materiacontroller_1.deleteMateria);
exports.default = routerMateria;
//# sourceMappingURL=materiaroute.js.map