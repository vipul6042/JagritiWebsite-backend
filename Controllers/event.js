//for writing api function
import { EventModel } from "../models/events.js"
import { PreEventModel } from "../models/events.js";
import { GuestTalksModel } from "../models/events.js";
 const getEvents=async(req,resp)=>{
   try{
    let response=await EventModel.find();
   resp.send({result:response,success:true})
   }
   catch(err){
    if(err){
        resp.send({result:"Error getting events data",success:false})
    }
   }
}
const getPreEvents=async(req,resp)=>{
    try{
        let response=await PreEventModel.find();
       resp.send({result:response,success:true})
       }
       catch(err){
        if(err){
            resp.send({result:"Error getting preEvents data",success:false})
        }
       }
}
const getGuestTalks=async(req,resp)=>{
    try{
        let response=await GuestTalksModel.find();
       resp.send({result:response,success:true})
       }
       catch(err){
        if(err){
            resp.send({result:"Error getting guesttalks data",success:false})
        }
       }
}
const addEvent=async(req,resp)=>{
    try{
        let data=req.body;
    let response=new EventModel(data);
    response=await response.save();
  resp.send({result:response})
    }
    catch(err){
        if(err){
            resp.send({result:"Error saving event",success:false})
        }
    }
}
const addPreEvent=async(req,resp)=>{
    try{
        let data=req.body;
    let response=new PreEventModel(data);
    response=await response.save();
  resp.send({result:response})
    }
    catch(err){
        if(err){
            resp.send({result:"Error saving preevent",success:false})
        }
    }
}
const addGuestTalks=async(req,resp)=>{
    try{
        let data=req.body;
    let response=new GuestTalksModel(data);
    response=await response.save();
  resp.send({result:response})
    }
    catch(err){
        if(err){
            resp.send({result:"Error saving guestTalks",success:false})
        }
    }
}
const updateEvent=async(req,resp)=>{
   try{ let {eventName,updatedBody}=req.body;
    let response=await EventModel.updateOne({eventName:eventName},{
        $set:updatedBody
    })
    resp.send({result:response})}
    catch(err){
        if(err){
            resp.send({err, result:"Updation of Events Failed",success:false})

        }
    }
}
const updatePreEvent=async(req,resp)=>{
    try{let {eventName,updatedBody}=req.body;
    let response=await PreEventModel.updateOne({eventName:eventName},{
        $set:updatedBody
    })
    resp.send({result:response})}
    catch(err){
        if(err){
            resp.send({result:"Updation of PreEvent Failed",success:false})

        }
    }
}
const updateGuestTalks=async(req,resp)=>{
    try{let {eventName,updatedBody}=req.body;
    let response=await GuestTalksModel.updateOne({eventName:eventName},{
        $set:updatedBody
    })
    resp.send({result:response,success:true})}
    catch(err){
        if(err){
            resp.send({result:"Updation of GuestTalks Failed",success:false})
        }
    }
}

const deleteEvent=async(req,resp)=>{
    try{
        let response=await EventModel.findOneAndDelete({eventName:req.body.eventName});
        resp.send({result:response});
    }
    catch(err){
        if(err){
            resp.send({result:"Not Able to delete Event",success:true});
        }
    }
}
const deletepreEvent=async(req,resp)=>{
    try{
        let response=await PreEventModel.findOneAndDelete({eventName:req.body.eventName});
        resp.send({result:response});
    }
    catch(err){
        if(err){
            resp.send({result:"Not Able to delete Pre Event",success:true});
        }
    }
}
const deleteguestTalks=async(req,resp)=>{
    try{
        let response=await GuestTalksModel.findOneAndDelete({eventName:req.body.eventName});
        resp.send({result:response});
    }
    catch(err){
        if(err){
            resp.send({result:"Not Able to delete Guest Talk",success:true});
        }
    }
}
export {getEvents,getPreEvents,getGuestTalks,addEvent,addGuestTalks,addPreEvent,updateEvent,updatePreEvent,updateGuestTalks,deleteEvent,deletepreEvent,deleteguestTalks}