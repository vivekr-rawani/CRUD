import { MongoClient } from "mongodb";
let dbConnection;
const connectToDatabase = (cb) =>{
    MongoClient.connect('mongodb://127.0.0.1/students')
    .then((client) =>{
        dbConnection = client.db();
        return cb();
    })
    .catch( (err) =>{
        console.log(err);
        return cb(err);
    })
}
const getDb = () => dbConnection;
export{connectToDatabase,getDb};