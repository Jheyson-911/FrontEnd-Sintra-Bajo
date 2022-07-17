import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

export const Post = sequelize.define('tbl_post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
    },
    contenido: {
        type: DataTypes.STRING,
    }
}
);