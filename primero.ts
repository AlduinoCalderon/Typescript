import dotenv from 'dotenv';
export const nombreMateria = "SOA";
console.log(nombreMateria);
dotenv.config();
import Server from './model/server';

const server = new Server();
server.listen();
