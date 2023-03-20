import { MongoClient } from "mongodb";
let dbConnection;
const url = 'mongodb+srv://admin-vivek:123@cluster0.wnrvrdi.mongodb.net/students';
const urlLocal = 'mongodb://127.0.0.1/students';
const connectToDatabase = (cb) =>{
    MongoClient.connect(url)
    .then((client) =>{
        dbConnection = client.db();
        console.log("connected to db")
        return cb();
    })
    .catch( (err) =>{
        console.log(err);
        return cb(err);
    })
}
const getDb = () => dbConnection;
export{connectToDatabase,getDb};