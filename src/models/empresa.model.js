import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

// ?IMPORTANDO LOS MODELOS QUE TIENE RELACION CON LA TABLA EMPRESA

import { Representante } from "./representante.model.js";

// TODO: CREACION DEL MODELO (tabla-empresa)

export const Empresa = sequelize.define("tbl_empresa", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    ruc:{
        type:DataTypes.STRING,
    }
}
);

// ?RELACION DE LA TABLA EMPRESA CON LA TABLA REPRESENTANTE

Empresa.hasMany(Representante, {
    foreingnKey: 'id_empresa'
}
);

Representante.belongsTo(Empresa, {
    foreingnKey: 'id_empresa'
}
);