import { Request, Response} from "express";
import tablaMateria from "../model/materia";
import { where } from "sequelize";
export const getMaterias = async(req:Request, resp:Response)=>{
    try{
        const materias = await tablaMateria.findAll();
        resp.json(materias);
    }
    catch(error){
        console.log(error);
        resp.status(500).json({mensaje: "Error del servidor"});
    }
    
}
export const getMateria = async(req:Request, resp:Response)=>{
    const {id} = req.params;
    try{
        const materia = await tablaMateria.findByPk(id);
        resp.json(materia);
    }
    catch(error){
        console.log(error);
        resp.status(500).json({mensaje: "Error del servidor"});
    }
}
export const postMateria = async(req:Request, resp:Response)=>{
    interface ParamsJSon{
        nombreMateria: string,
        estadoMateria: boolean,
        semestreMateria: number
    }
    const bodyJSon = <ParamsJSon> req.body;
    const nombreMat = bodyJSon.nombreMateria;
    const estadoMat = bodyJSon.estadoMateria;
    const semestreMat = bodyJSon.semestreMateria;
    const {body} = req;
    try{
        const materiaInsertada = await tablaMateria.create(body);
        resp.json(materiaInsertada);   
    }
    catch(error){
        console.log(error);
        resp.status(500).json({mensaje: "Error al insertar"});
    }
    
    
}
export const putMateria = async(req:Request, resp:Response)=>{
    interface ParamsJSon{
        nombreMateria: string,
        estadoMateria: boolean,
        semestreMateria: number
    }
    const bodyJSon = <ParamsJSon> req.body;
    const nombreMat = bodyJSon.nombreMateria;
    const estadoMat = bodyJSon.estadoMateria;
    const semestreMat = bodyJSon.semestreMateria;
    const {body} = req;
    const {id} = req.params;
    try{
        const materiaEncontrada = await tablaMateria.findByPk(id);
        if (!materiaEncontrada) {
            return resp.status(404).json({mensaje: "Materia no encontrada"})
        } else{
        const materiaActualizada = await materiaEncontrada.update(body);
        resp.json(materiaActualizada);   }
        
    }
    catch(error){ 
        console.log(error);
        resp.status(500).json({mensaje: "Error al actualizar"});
    }  
}
export const deleteMateria = async(req:Request, resp:Response)=>{
    const {id} = req.params;
    try{
        const materiaEncontrada = await tablaMateria.findByPk(id);
        if (!materiaEncontrada) {
            return resp.status(404).json({mensaje: "Materia no encontrada"})
        } else{
        const materiaActualizada = await materiaEncontrada.update({"estadoMateria": false});
        resp.json(materiaActualizada);}
    }
    catch(error){
        console.log(error);
        resp.status(500).json({mensaje: "Error del servidor"});
    } 
}