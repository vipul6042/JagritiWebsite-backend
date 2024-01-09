import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import connectdb from './db/connectdb.js';
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";
import ca from "./routes/ca.js";
import events from "./routes/events.js";

dotenv.config();
const app = express();
const port = 3000;
connectdb(process.env.MONGO_URL);
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})