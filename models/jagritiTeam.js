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

const JagritiTeamModel = mongoose.model("JagritiTeam", teamSchema);

export default JagritiTeamModel;
