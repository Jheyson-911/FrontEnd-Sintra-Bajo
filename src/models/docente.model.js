import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

// TODO: CREACION DEL MODELO (tabla-docente)

export const Docente = sequelize.define('tbl_docente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    },
    especialidad: {
        type: DataTypes.STRING,
    }
}
);