import mongoose from "mongoose";
import { envConfig } from "./dotenv.js";

const db = async(res,req)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connect suceessfully");
        
    } catch (error) {
        console.log(error.message);
         console.log("`Database not connected");
    }

}
export default db;