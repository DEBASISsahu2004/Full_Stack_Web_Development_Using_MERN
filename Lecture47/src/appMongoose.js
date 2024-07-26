const {connect} = require("mongoose");
require('dotenv').config();


const MONGO_URL = "mongodb+srv://debasis:MONGODB@cluster0.pqqw5uj.mongodb.net";

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