const {connect} = require("mongoose");

const MONGODB_URL = "mongodb+srv://debasis:MONGODB@cluster0.pqqw5uj.mongodb.net";

const DB_NAME = "cs-lib-app";

const connectDb = async () => {
    try {
        await connect (`${MONGODB_URL}/${DB_NAME}`);
        console.log("MongoDb connected.");
    } catch (err) {
        console.error(err);
    }
};

connectDb();

module.exports = {};