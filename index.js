import express from 'express';
import bodyParser from "body-parser";
import eceRoutes from "./routes/students.js";
import { connectToDatabase, getDb } from './db.js';
const app = express();

const PORT = 3000;

app.use(bodyParser.json());

// connectToDatabase((err)=>{
//     app.listen(PORT, () => {
//         console.log(`working on port http://localhost:${PORT}`);
//       });
//       db =getDb();

// });

app.listen(PORT, () => {
  console.log(`working on port http://localhost:${PORT}`);
});

app.get('/', (req, res)=>{
  res.send("working in homepage");
});


app.use("/ece", eceRoutes);
