import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a mongo");
  } catch (error) {
    console.log("Error al conectar a la base de datos", error);
  }
};

export default connectDB;
