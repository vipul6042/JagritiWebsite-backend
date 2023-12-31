import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    icon: { type: String, required: true },
    members: [
        {
            name: { type: String, required: true },
            email: { type: String },
            instagram: { type: String },
            linkedin: { type: String },
            imageUrl: { type: String },
        }
    ]
});

const teamModel = mongoose.model("Team", teamSchema);

export default teamModel;
