import dotenv from 'dotenv';
dotenv.config();
import express, {Application} from 'express';
import routerMateria from '../routes/materiaroute';
import dbConn from '../database/connection';
class Server{
    private app: Application;
    private port: string;
    private apiRoutes = {
        materia : '/api/materia'
    }
    async dbConnfn(){
        try{
            await dbConn.authenticate();
            console.log("Base de datos conectada");
        }
        catch(error){
            console.log(error);
        }
    }
    routes(){
        this.app.use(this.apiRoutes.materia, routerMateria);
    }
    accesoPublico(){
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8001';
        this.dbConnfn();
        this.accesoPublico();
        this.routes();
    }
    listen(){
        this.app.listen(this.port, ()=> {
            console.log("Escuchando en el puerto: "+this.port);
        });
    }
}
export default Server;