import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
});