import mongoose from "mongoose";
import dotenv, { config } from "dotenv";

dotenv.config();

const connection = mongoose.connect(process.env.MONGODB_URI);

export default connection;
