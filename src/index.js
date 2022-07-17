import app from "./app.js"

import {sequelize } from "./database/database.js"



let port = process.env.PORT || 8080
async function main() {
    try{
        await sequelize.sync({
            // force:true
        });
        // await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(port , () => {
        console.log("Server on port 8080");
        });
    }
    catch(error){
        console.log("Unable to connect to the database "+error);
    }
}
main()