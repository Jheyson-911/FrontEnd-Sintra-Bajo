import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

export const Documento = sequelize.define('tbl_documento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    carta_presentacion: {
        type: DataTypes.STRING,
    },
    carta_aceptacion: {
        type: DataTypes.STRING,
    },
    convenio_ppp: {
        type: DataTypes.STRING,
    },
    plan_ppp: {
        type: DataTypes.STRING,
    },
    constancia: {
        type: DataTypes.STRING,
    },
    informe_ppp: {
        type: DataTypes.STRING,
    }
}
);