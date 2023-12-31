import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import connectdb from './db/connectdb.js';

dotenv.config();
const app = express();
const port = 3001;
connectdb(process.env.MONGO_URL);
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})