import { Router } from "express";
import {    getMaterias, getMateria, postMateria, putMateria, deleteMateria} from "../controller/materiacontroller"
const routerMateria = Router();
routerMateria.get('/', getMaterias);
routerMateria.get('/:id', getMateria);
routerMateria.post('/', postMateria);
routerMateria.put('/:id', putMateria);
routerMateria.delete('/:id', deleteMateria);
export default routerMateria;