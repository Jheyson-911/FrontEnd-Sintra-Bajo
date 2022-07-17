import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

// TODO: CREACION DEL MODELO (tabla-contenidoItem)
export const ContenidoItem = sequelize.define('tbl_contenido_item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    calificacion: {
        type: DataTypes.INTEGER,
    }
}
);