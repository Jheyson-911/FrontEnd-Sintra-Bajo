import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

// ?IMPORTANDO LOS MODELOS QUE TIENEN RELACION CON LA TABLA ITEM
import { ContenidoItem } from "./contenidoItem.model.js";

// TODO: CREACION DEL MODELO (tabla-item)

export const Item = sequelize.define("tbl_item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type:DataTypes.STRING,
    }
}
);

// ?RELACION DE ITEM CON LA TABLA CONTENIDO_ITEM

Item.hasMany(ContenidoItem, {
    foreingnKey: 'id_item'
}
);

ContenidoItem.belongsTo(Item, {
    foreingnKey: 'id_item'
}
);