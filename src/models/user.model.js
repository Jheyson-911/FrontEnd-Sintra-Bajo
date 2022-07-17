import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
// import { Role } from "./role.model.js";
import { Post } from "./post.model.js";
import { Convenios } from "./convenios.model.js";

export const User = sequelize.define('tbl_user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    rol: {
        type: DataTypes.STRING
    }
});


User.hasMany(Post, {
    foreingnKey: 'id_user',
    sourceKey: 'id'
}
);
Post.belongsTo(User, {
    foreingnKey: 'id_user',
    sourceKey: 'id'
}
);

User.hasMany(Convenios, {
    foreingnKey: 'id_user',
    sourceKey: 'id'
}
);
Convenios.belongsTo(User, {
    foreingnKey: 'id_user',
    sourceKey: 'id'
}
);
