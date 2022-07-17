import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

// !CREACION DEL MODELO (tabla-representante)

export const Representante = sequelize.define("tbl_representante", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    dni: {
        type: DataTypes.STRING,
    },
    celular: {
        type: DataTypes.STRING,
    }
}
);