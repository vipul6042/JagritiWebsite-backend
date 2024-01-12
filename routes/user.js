import express from "express";
const userouter=express.Router();
import userModel from "../models/user.js";
userouter.get("/",async(req,resp)=>{
   try{
      let response=await userModel.find();
      resp.send({})
   }
   catch(err){
    if(err){
        resp.send({result:"Error uploading data",success:true})
    }
   }
})

export {userouter}