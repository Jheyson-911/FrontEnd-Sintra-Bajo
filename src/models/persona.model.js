import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

// ?IMPORTANDO LOS MODELOS QUE TIENEN RELACION CON LA TABLA PERSONA

import { User } from "./user.model.js";
import { Estudiante } from "./estudiante.model.js";
import { Docente } from "./docente.model.js";

// TODO:CREACION DEL MODELO (tabla-persona)

export const Persona = sequelize.define('tbl_persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellidoPaterno:{
        type:DataTypes.STRING,
    },
    apellidoMaterno:{
        type:DataTypes.STRING,
    },
    dni: {
        type: DataTypes.STRING,
    },
    correo:{
        type:DataTypes.STRING,
    },
    celular:{
        type:DataTypes.STRING,
    }
});

// ?RELACION DE LA TABLA PERSONA CON LA TABLA USUARIO
Persona.hasMany(User, {
    foreingnKey: 'id_persona',
    sourceKey: 'id'
}
);
User.belongsTo(Persona, {
    foreingnKey: 'id_persona'
}
);

// ?RELACION DE LA TABLA PERSONA CON LA TABLA ESTUDIANTE
Persona.hasMany(Estudiante, {
    foreingnKey: 'id_persona'
}
);
Estudiante.belongsTo(Persona, {
    foreingnKey: 'id_persona'
}
);
// ?RELACION DE LA TABLA PERSONA CON LA TABLA DOCENTE
Persona.hasMany(Docente, {
    foreingnKey: 'id_persona'
}
);
Docente.belongsTo(Persona, {
    foreingnKey: 'id_persona'
}
);

