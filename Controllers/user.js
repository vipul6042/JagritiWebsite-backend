import userModel from "../models/user.js";
import { ObjectId } from "mongoose";
// const { ObjectId } = require('mongodb'); 
/*CREATE */
export const createuser = async (req, res) => {
  try {
    const { name, mobile, email, college, course, year} =
      req.body;

    const newUser = new userModel({
      name,
      mobile,
      email,
      college,
      course,
      year,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* READ */
export const getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAUser=async(req,res)=>{
  try {
    const {email}=req.body
    const user = await userModel.findOne({email: email});
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.status(200).send({status:true});
    } else {
      res.status(400).send({status:false});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
export const updateUser = async (req, res) => {
  try {
    const { email, newData } = req.body;
    const updatedUser = await userModel.findOneAndUpdate(
      { email: email },
      { $set: newData },
      { new: true }
    );

    if (updatedUser) {
      res.status(200).send("User updated successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const addEvent = async (req, res) => {
  const { email, eventType, eventName, status } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Assuming you have separate arrays for each event type
    switch (eventType) {
      case "event":
        user.event.push({ eventName, status });
        break;
      case "preEvent":
        user.preEvents.push(eventName);
        break;
      case "guestTalk":
        user.guestTalks.push(eventName);
        break;
      default:
        return res.status(400).json({ message: "Invalid event type" });
    }

    await user.save();

    return res.status(201).json({ message: "Event added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
/*DELETE */

export const deleteUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const deletedUser = await userModel.findOneAndDelete({ email: email });
    if (deletedUser) {
      res.status(200).send("User deleted successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteEvent = async (req, res) => {
  const { email, eventType, eventName } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let eventArray;

    switch (eventType) {
      case 'event':
        eventArray = user.event;
        break;
      case 'preEvent':
        eventArray = user.preEvents;
        break;
      case 'guestTalk':
        eventArray = user.guestTalks;
        break;
      default:
        return res.status(400).json({ message: 'Invalid event type' });
    }

    const eventIndex = eventArray.findIndex((event) => {
        const eventObjectIdAsString = event.eventName.toString();
        return eventObjectIdAsString === eventName;
      });
      
    if (eventIndex === -1) {
      return res.status(404).json({ message: 'Event not found' });
    }

    eventArray.splice(eventIndex, 1);
    await user.save();

    return res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

