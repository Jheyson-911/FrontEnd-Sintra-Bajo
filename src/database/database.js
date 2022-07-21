import Sequelize from "sequelize";
import  "dotenv/config";

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    '123456',
    {
        host:'localhost',
        port:'5432',
        dialect:'postgres',
    }
);

export const  key = {
    secret: "token-secret98175",
    secretRefresh: "token-secret98175-refresh"
}
export const modoDeveloper = true;