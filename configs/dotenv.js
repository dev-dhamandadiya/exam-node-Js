import dotenv from "dotenv";

dotenv.config();
export const envConfig ={
    PORT : process.env.PORT||8081,
    MONGODB_URL : process.env.MONGODB_URL
};