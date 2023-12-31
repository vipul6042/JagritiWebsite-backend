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
        teamName: { type: String, required: true },
        teamIcon: { type: String, required: true },
        members: [{
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User"
        }]
    }]
}, {
    timestamps: true,
});

const EventModel = mongoose.model("Event", eventSchema);
const PreEventModel = mongoose.model("PreEvent", eventSchema);
const GuestTalksModel = mongoose.model("GuestTalks", eventSchema);

export { EventModel, PreEventModel, GuestTalksModel };
