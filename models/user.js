import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number },
    email: { type: String, required: true },
    college: { type: String },
    course: { type: String },
    year: { type: String },
    admin : {type : Boolean},
    events: [{
        eventName: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Event",
            unique:true
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
            ref: "PreEvent",
            unique:true
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
            ref: "GuestTalks",
            unique:true
        },
        status: {
            type: String,
            required: true
        }
    }]
})

const userModel =mongoose.model("users", userSchema);

export default userModel;