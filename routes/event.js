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
     getEventByID,
     getPreEventByID,
     getGuestTalkByID,
     updateEvent, 
     updateGuestTalks, 
     updatePreEvent, 
     addParticipant} from "../Controllers/event.js";
eventrouter.route("/events").get(getEvents)
eventrouter.route("/preEvents").get(getPreEvents)
eventrouter.route("/GuestTalks").get(getGuestTalks)

eventrouter.route("/createEvent/addEvent").post(addEvent)
eventrouter.route("/createEvent/addPreEvent").post(addPreEvent)
eventrouter.route("/createEvent/addGuestTalks").post(addGuestTalks)

eventrouter.route("/getEventByID").post(getEventByID)
eventrouter.route("/getPreEventByID").post(getPreEventByID)
eventrouter.route("/getGuestTalkByID").post(getGuestTalkByID)

eventrouter.route("/updateEvent/events").put(updateEvent)
eventrouter.route("/updateEvent/preEvents").put(updatePreEvent)
eventrouter.route("/updateEvent/guestTalks").put(updateGuestTalks)

eventrouter.route("/deleteEvent/events").delete(deleteEvent)
eventrouter.route("/deleteEvent/preEvents").delete(deletepreEvent)
eventrouter.route("/deleteEvent/guestTalks").delete(deleteguestTalks)

eventrouter.route("/registration").post(addParticipant)

export default eventrouter
