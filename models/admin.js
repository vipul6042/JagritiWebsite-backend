import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email : String,
    password : String
})

const adminModel = new mongoose.model("admin", adminSchema);

export default adminModel;