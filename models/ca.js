import mongoose from "mongoose";

const caSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    college: { type: String, required: true },
    branch: { type: String, required: true }
});

const CaModel = mongoose.model("Ca", caSchema);

export default CaModel;
