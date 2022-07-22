import Sequelize from "sequelize";
import  "dotenv/config";

export const sequelize = new Sequelize(
    'bdpy',
    'admin',
    '123',
    {
        host:'localhost',
        dialect:'postgres',
    }
);

export const  key = {
    secret: "token-secret98175",
    secretRefresh: "token-secret98175-refresh"
}
export const modoDeveloper = true;