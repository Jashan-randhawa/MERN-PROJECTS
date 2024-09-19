import express, { request, response } from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./model/bookmodel.js"
import router from "./routes/booksroute.js";

import cors from 'cors';


const app =express();

app.use(cors()) // Use this after the variable declaration

app.use(express.json())

app.get("/",(request,response) =>{
  console.log(request);
  return response.status(234).send("welcome to the browser")
});
app.use("/books",router);
/* app.use(cors());  */
/*  app.use(cors({
  origin : "http://localhost:3000",
  methods : ['GET','POST','DELETE','PUT'],
  allowedHeaders : ['Content-Type']
}));  */
 mongoose.connect(mongoDBURL).then(()=>{
  console.log("connected to the database ");
  
 app.listen(PORT ,() => {
  console.log(`The app is listened at port : ${PORT}`);
 });

  
 }).catch((err)=>{
  console.log(err);
  

 });