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
            resp.send({err, result:"Error saving event",success:false})
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

const getEventByID = async (req, res) => {
    try {
      const { _id } = req.body;
      const event = await EventModel.findOne({ _id: _id });
      res.status(200).json(event);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const getPreEventByID = async (req, res) => {
    try {
      const { _id } = req.body;
      const preEvent = await PreEventModel.findOne({ _id: _id });
      res.status(200).json(preEvent);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const getGuestTalkByID = async (req, res) => {
    try {
      const { _id } = req.body;
      const guestTalk = await GuestTalksModel.findOne({ _id: _id });
      res.status(200).json(guestTalk);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

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

const addParticipant=async(req,res)=>{
    try{
        const {eventName,eventType,participant}=req.body
        let event
        if(eventType==="event"){
            event=await EventModel.findOne({eventName:eventName})
        }else if(eventType==="preEvent"){
            event=await PreEventModel.findOne({eventName:eventName})
        }else if(eventType==="guestTalk"){
            event=await GuestTalksModel.findOne({eventName:eventName})
        }else {
            res.status(400).json({error:"invalid eventType"})
        }
        event.participants.push(participant)
        await event.save()
        res.status(201).json(event)
    }catch(err){
        res.status(500).json({error:err})
    }
}
export {getEvents,getPreEvents,getGuestTalks,addEvent,addGuestTalks,addPreEvent,getEventByID,getPreEventByID,getGuestTalkByID,updateEvent,updatePreEvent,updateGuestTalks,deleteEvent,deletepreEvent,deleteguestTalks,addParticipant}