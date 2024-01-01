import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    link: { type: String, required: true },
    imageURL: { type: String, required: true },
    overview: { type: String, required: true },
    status: { type: Boolean, required: true },
    contacts: [{
        name: { type: String, required: true },
        mobile: { type: Number, required: true }
    }],
    participants: [{
        type : mongoose.Types.ObjectId, ref : "Teams", required : true
    }]
}, {
    timestamps: true,
});

const EventModel = mongoose.model("Event", eventSchema);
const PreEventModel = mongoose.model("PreEvent", eventSchema);
const GuestTalksModel = mongoose.model("GuestTalks", eventSchema);

export { EventModel, PreEventModel, GuestTalksModel };