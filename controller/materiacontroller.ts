import { Request, Response} from "express";
export const getMaterias = (req:Request, resp:Response)=>{
    
    resp.json({
        mensaje: "getMaterias"
    });
    
}
export const getMateria = (req:Request, resp:Response)=>{
    const {id} = req.params;
    resp.json({
        mensaje: "getMateria",
        id
    });
    
}
export const postMateria = (req:Request, resp:Response)=>{
    const {body} = req;
    resp.json({
        mensaje: "postMateria",
        body
    });   
}
export const putMateria = (req:Request, resp:Response)=>{
    const {body} = req;
    const {id} = req.params;
    resp.json({
        mensaje: "putMateria",
        body,
        id
    });   
}
export const deleteMateria = (req:Request, resp:Response)=>{
    const {id} = req.params;
    resp.json({
        mensaje: "deleteMateria",
        id
    });   
}