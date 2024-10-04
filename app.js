import express from 'express';
import bodyParser from 'body-parser'
import dotenv from "dotenv";
import connectDB from './config/db.js';
import tareaRoutes from "./Routes/tareas.routes.js";

dotenv.config()

connectDB();

const app = express();
app.use(bodyParser.json())

app.use("/tareas", tareaRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Ejecutando en http://localhost:${port}`);
    
})
