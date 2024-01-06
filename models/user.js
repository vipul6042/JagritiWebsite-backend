import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number },
    email: { type: String, required: true },
    college: { type: String },
    course: { type: String },
    year: { type: String },
    gender: { type: String },
    nationality: { type: String },
    admin : {type : Boolean},
    event: [{
        eventName: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Event"
        },
        status: {
            type: String,
            required: true
        }
    }],
    preEvents: [{
        eventName: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "PreEvent"
        },
        status: {
            type: String,
            required: true
        }
    }],
    guestTalks: [{
        eventName: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "GuestTalks"
        },
        status: {
            type: String,
            required: true
        }
    }]
})

const userModel = new mongoose.model("User", userSchema);

export default userModel;