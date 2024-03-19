import dotenv from 'dotenv';
dotenv.config();
import express, {Application} from 'express';
import routerMateria from '../routes/materiaroute';
class Server{
    private app: Application;
    private port: string;
    private apiRoutes = {
        materia : '/api/materia'
    }
    routes(){
        this.app.use(this.apiRoutes.materia, routerMateria);
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8001';
        this.routes();
    }
    listen(){
        this.app.listen(this.port, ()=> {
            console.log("Escuchando en el puerto: "+this.port);
        });
    }
}
export default Server;