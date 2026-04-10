import express from "express";
import db from "./configs/database.js";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

db();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use(cookieParser());
app.use(morgan("dev"));

app.use(routes);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Server Start");
        console.log(`http://localhost:${PORT}`);
    }
});