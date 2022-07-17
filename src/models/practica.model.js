import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

// ?IMPORTANDO LOS MODELOS QUE TIENEN RELACION CON LA TABLA PRACTICA

import { Empresa } from './empresa.model.js';
import { Evaluacion } from './evaluacion.model.js';

// TODO: CREACION DEL MODELO (tabla-practica)

export const Practica = sequelize.define('tbl_practica', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_inicio: {
        type: DataTypes.DATE,
    },
    fecha_fin: {
        type: DataTypes.DATE,
    },
    horas: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    }
}
);

// ?RELACION DE PRACTICA CON LA TABLA EMPRESA
Practica.hasMany(Empresa, {
    foreingnKey: 'id_practica'
}
);
Empresa.belongsTo(Practica, {
    foreingnKey: 'id_practica'
}
);

// ?RELACION DE PRACTICA CON LA TABLA EVALUACION
Practica.hasMany(Evaluacion, {
    foreingnKey: 'id_practica'
}
);
Evaluacion.belongsTo(Practica, {
    foreingnKey: 'id_practica'
}
);


