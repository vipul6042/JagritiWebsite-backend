import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import connectdb from './db/connectdb.js';
import {eventrouter} from './routes/event.js';
dotenv.config();
const app = express();
const port = 3000;
connectdb(process.env.MONGO_URL);
app.use(cors());
app.use(express.json());
app.use("/event",eventrouter)
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})