import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import connectdb from './db/connectdb.js';
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";
import ca from "./routes/ca.js";
import events from "./routes/event.js";
import teams from "./routes/teams.js"

dotenv.config();
const app = express();
const port = 8000;
connectdb(process.env.MONGO_URL);
app.use(cors());
app.use(express.json());

app.use('/auth', auth);
// app.use('/admin', admin);
app.use('/ca', ca);
app.use('/admin', events);//admin controles
app.use('/team',teams)

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})