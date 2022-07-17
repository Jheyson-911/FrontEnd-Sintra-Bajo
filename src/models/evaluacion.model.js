import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';

// ?IMPORTANDO LOS MODELOS QUE TIENEN RELACION CON LA TABLA PERSONA

import { Item } from './item.model.js';
import { Docente } from './docente.model.js';

// TODO: CREACION DEL MODELO (tabla-evaluacion)

export const Evaluacion = sequelize.define('tbl_evaluacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fase: {
        type: DataTypes.STRING,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    observaciones: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.STRING,
    }
}
);

// ?RELACION DE EVALUACION CON LA TABLA ITEM
Evaluacion.hasMany(Item, {
    foreingnKey: 'id_evaluacion'
}
);
Item.belongsTo(Evaluacion, {
    foreingnKey: 'id_evaluacion'
}
);
// ?RELACION DE EVALUACION CON LA TABLA DOCENTE

Evaluacion.hasMany(Docente, {
    foreingnKey: 'id_evaluacion'
}
);
Docente.belongsTo(Evaluacion, {
    foreingnKey: 'id_evaluacion'
}
);
