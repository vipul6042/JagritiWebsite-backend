import mongoose, { mongo } from "mongoose";

const teamsSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    teamLeader: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    members: [{
        member: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User"
        }
    }]
})

const teamsModel = new mongoose.model("Teams", teamsSchema);

export default teamsModel;