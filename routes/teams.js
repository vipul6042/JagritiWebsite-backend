import express from "express";
import { createTeam, getTeam, deleteTeamById, updateTeamById ,getTeamById} from '../Controllers/team.js';

const router = express.Router();

router.get('/getallteam',getTeam)
router.post('/team',getTeamById)
router.patch('/updateTeamById',updateTeamById)
router.delete('/deleteteam',deleteTeamById)
router.post('/createTeam',createTeam)

export default router;
