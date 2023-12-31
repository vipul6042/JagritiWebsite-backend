import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    college: { type: String },
    course: { type: String },
    year: { type: String },
    gender: { type: String },
    nationality: { type: String },
    event: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Event"
    }],
    preEvents: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "PreEvent"
    }],
    guestTalks: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "GuestTalks"
    }]
})

const userModel = new mongoose.model("User", userSchema);

export default userModel;