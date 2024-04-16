"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = 'pruebasoa';
const user = 'root';
const password = '';
const serverMysql = 'localhost';
const dbConn = new sequelize_1.Sequelize(dbName, user, password, { host: serverMysql, dialect: "mariadb" });
exports.default = dbConn;
//# sourceMappingURL=connection.js.map