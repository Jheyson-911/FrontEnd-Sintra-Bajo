import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

// ?IMPORTANDO LOS MODELOS QUE TIENEN RELACION CON LA TABLA PERSONA

import { Documento } from "./documentos.model.js";
import { Solicitud } from "./solicitud.model.js";
import { Practica } from "./practica.model.js";

// TODO: CREACION DEL MODELO (tabla-estudiante)

export const Estudiante = sequelize.define('tbl_estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
    },
    ciclo:{
        type:DataTypes.STRING,
    },
    year:{
        type:DataTypes.STRING,
    },
    estado_practicas:{
        type:DataTypes.STRING,
    }
}
);

// ?RELACION DE LA TABLA PERSONA CON LA TABLA DOCUMENTO

Estudiante.hasMany(Documento, {
    foreingnKey: 'id_estudiante'
}
);

Documento.belongsTo(Estudiante, {
    foreingnKey: 'id_estudiante'
}
);

// ?RELACION DE LA TABLA PERSONA CON LA TABLA SOLICITUD

Estudiante.hasMany(Solicitud, {
    foreingnKey: 'id_estudiante'
}
);

Solicitud.belongsTo(Estudiante, {
    foreingnKey: 'id_estudiante'
}
);

// ?RELACION DE LA TABLA PERSONA CON LA TABLA PRACTICAS

Estudiante.hasMany(Practica, {
    foreingnKey: 'id_estudiante'
}
);
Practica.belongsTo(Estudiante, {
    foreingnKey: 'id_estudiante'
}
);


