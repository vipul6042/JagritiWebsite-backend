import express from "express";
const eventrouter=express.Router();

import { addEvent,
     addGuestTalks, 
     addPreEvent, 
     deleteEvent, 
     deleteguestTalks, 
     deletepreEvent, 
     getEvents, 
     getGuestTalks, 
     getPreEvents, 
     updateEvent, 
     updateGuestTalks, 
     updatePreEvent } from "../controls/event.js";
eventrouter.route("/").get(getEvents)
eventrouter.route("/preEvent").get(getPreEvents)
eventrouter.route("/GuestTalks").get(getGuestTalks)

eventrouter.route("/createEvent/addEvent").post(addEvent)
eventrouter.route("/createEvent/addPreEvent").post(addPreEvent)
eventrouter.route("/createEvent/addGuestTalks").post(addGuestTalks)

eventrouter.route("/updateEvent/events").put(updateEvent)
eventrouter.route("/updateEvent/preEvents").put(updatePreEvent)
eventrouter.route("/updateEvent/guestTalks").put(updateGuestTalks)

eventrouter.route("/deleteEvent/events").delete(deleteEvent)
eventrouter.route("/deleteEvent/preEvents").delete(deletepreEvent)
eventrouter.route("/deleteEvent/guestTalks").delete(deleteguestTalks)


export  {eventrouter}