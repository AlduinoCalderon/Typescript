import { DataTypes } from "sequelize";
import dbConn from "../database/connection";
const tablaMateria =  dbConn.define('materia',{
    nombreMateria:{
        type:DataTypes.STRING
    },
    estadoMateria:{
        type:DataTypes.BOOLEAN
    },
    semestreMateria:{
        type:DataTypes.TINYINT
    }
},
{
    timestamps : false,
    freezeTableName : true,
    createdAt : false,
    updatedAt : false
})
export default tablaMateria;