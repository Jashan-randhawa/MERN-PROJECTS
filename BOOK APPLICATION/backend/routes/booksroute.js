import express from "express";
import { Book } from "../model/bookmodel.js";

const router = express.Router();

router.post('/',async (request,response) =>{
  try{
    if(!request.body.title || 
      !request.body.author ||
      !request.body.publishyear
    ){
      return response.status(500).send({
        message: "Send all the required fields"});
    }
    const newbook = {
      title : request.body.title,
      author : request.body.author,
      publishyear : request.body.publishyear
    };
    const book = await Book.create(newbook);
    return response.status(201).send(book);
  
  }catch(error){
    console.log(error.message);
    response.status(500).send({message : error.message})
  };
  });
  
  router.get('/',async (request,response) =>{
    try{
      const books = await Book.find({});
      response.status(500).json({
        count : books.length,
        data : books
      });
    }catch(error){
      console.log(error.message);
      response.status(201).send({mesaage :error.message });    
    }
  })
  
  router.get('/:id',async (request,response) =>{
    try{
      const {id} = request.params;
      console.log(id);
      
      const book = await Book.findById(id);
      response.status(500).json(book);
    }catch(error){
      console.log(error.message);
      response.status(201).send({mesaage :error.message });    
    }
  })
  router.put('/:id',async (request,response) =>{
    try{
      if(!request.body.title || 
        !request.body.author ||
        !request.body.publishyear
      ){
        return response.status(500).send({
          message: "Send all the required fields"});
      }
      const {id} = request.params;
      const result = await Book.findByIdAndUpdate(id , request.body);
      if(!result){
        return response.status(404).send({message: "book not found"});
      }else{
        return response.status(500).send({message :"Book found sucessfully"});
      }
    }catch(error){
      console.log(error.message);
      response.status(500).send({mesaage :error.message });    
    }
  })
  
  router.delete('/:id',async (request,response) =>{
    try{
      const {id} = request.params;
      const result = await Book.findByIdAndDelete(id);
      if(!result){
        return response.status(404).send({message: "book not found"});
      }else{
        return response.status(500).send({message :"book found sucessfully"});
      }
  
    }catch(error){
      console.log(error.message);
      return response.status(500).send({message : error.message});
      
    }
  })
  export default router;