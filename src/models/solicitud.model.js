import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';


export const Solicitud = sequelize.define('tbl_solicitud', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_empresa: {
        type: DataTypes.STRING,
    },
    nombre_dirigido: {
        type: DataTypes.STRING,
    },
    cargo_dirigido:{
        type:DataTypes.STRING,
    },
    estado_solicitud: {
        type:DataTypes.STRING,
    }
}
);