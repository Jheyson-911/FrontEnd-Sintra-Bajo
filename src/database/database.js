import Sequelize from "sequelize";
import  "dotenv/config";

export const sequelize = new Sequelize(
    'd9evgdmq3dde5a',
    'whdfpmnzkqfkkc',
    '41f73720d851ea0e740b9e38119c4e0261d3af5fc7eccee81545dcfb760cc47e',
    {
        host:'ec2-34-235-198-25.compute-1.amazonaws.com',
        dialect:'postgres',
        dialectOptions:{
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

export const  key = {
    secret: "token-secret98175",
    secretRefresh: "token-secret98175-refresh"
}
export const modoDeveloper = true;