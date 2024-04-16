import { Sequelize } from "sequelize";
const dbName: string = 'pruebasoa';
const user: string = 'root';
const password : string = '';
const serverMysql : string = 'localhost';
const dbConn = new Sequelize(dbName,user,password,{host: serverMysql, dialect: "mariadb"});
export default dbConn;