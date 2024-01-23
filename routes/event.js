import express from "express";
const eventrouter = express.Router();

import {
  addEvent,
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
  updatePreEvent,
} from "../controllers/event.js";


eventrouter.post("/event", getEvents);
eventrouter.post("/preEvent", getPreEvents);
eventrouter.post("/GuestTalks", getGuestTalks);

eventrouter.post("/createEvent/addEvent", addEvent);
eventrouter.post("/createEvent/addPreEvent", addPreEvent);
eventrouter.post("/createEvent/addGuestTalks", addGuestTalks);

eventrouter.post("/updateEvent/events", updateEvent);
eventrouter.post("/updateEvent/preEvents", updatePreEvent);
eventrouter.post("/updateEvent/guestTalks", updateGuestTalks);

eventrouter.post("/deleteEvent/events", deleteEvent);
eventrouter.post("/deleteEvent/preEvents", deletepreEvent);
eventrouter.post("/deleteEvent/guestTalks", deleteguestTalks);


export default eventrouter
