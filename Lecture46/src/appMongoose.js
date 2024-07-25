const {connect} = require("mongoose");
require('dotenv').config();


const MONGO_URL = process.env.MONGO_URL;

const DB_NAME = `cs-mern`;

async function connectDb(){
    try{
        await connect(`${MONGO_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDb connected.");
    }catch(err){
        console.error(`Error here ${err}`);
    }

}

connectDb();