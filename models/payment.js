import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    name : mongoose.Types.ObjectId,
    status : String
})

const paymentModel = new mongoose.model("Payment", paymentSchema);

export default paymentModel;