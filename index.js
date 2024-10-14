import express from "express";
import {connection} from "./DB/config.js";

connection.connect(function(err){
    if (err) throw err;
    console.log("MySQL database connected successfully at port 3306..");
});

const PORT = process.env.PORT || 3000;

const app = express();
app.listen(PORT, ()=>{
    console.log("Server listening at port 3000..");
});



