import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true, unique: true },
    link: { type: String },
    imageURL: { type: String, required: true },
    overview: { type: String, required: true },
    status: { type: Boolean, required: true },
    teamEvent: { type: Boolean, required: true },
    timeline:{type:String},
    contacts: [{
        name: { type: String, required: true },
        mobile: { type: Number, required: true }
    }]
    ,
    participants: [{
        teams: {
            type: mongoose.Types.ObjectId, ref: "Teams",
            //  required: true
        },
        individuals: {
            type: mongoose.Types.ObjectId,
            ref:"users",
            // required: true
        },
        driveUrl: { type: String, required: true},
        status: { type: String, required: true, default: "Pending"}
    }]
}, {
    timestamps: true,
});

const EventModel = mongoose.model("Event", eventSchema);
const PreEventModel = mongoose.model("PreEvent", eventSchema);
const GuestTalksModel = mongoose.model("GuestTalks", eventSchema);

export { EventModel, PreEventModel, GuestTalksModel };
