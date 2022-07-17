import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

// ?IMPORTANDO LOS MODELOS QUE TIENE RELACION CON LA TABLA  CONVENIOS


// TODO: CREACION DEL MODELO (tabla-convenios)
export const Convenios = sequelize.define("tbl_convenios", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    url_image: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    }
}
);
