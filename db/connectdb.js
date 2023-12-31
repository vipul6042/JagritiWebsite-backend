import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "Jagriti",
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("database connected successfully...");
    } catch (error) {
        console.log(error);
    }
}

export default connectdb;