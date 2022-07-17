import Sequelize from "sequelize";
import  "dotenv/config";

export const sequelize = new Sequelize(
    'dccn61cf22kdgp',
    'ftkysustmtbhba',
    '05c651033edbfaac687ecf308ade249fd641f848052b32e8166a3a3022190721',
    {
        host:'ec2-3-219-52-220.compute-1.amazonaws.com',
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