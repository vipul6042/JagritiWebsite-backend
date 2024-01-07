import express from "express";
import { addEvent, checkEmail, createuser, deleteEvent, deleteUserByEmail, getUser, updateUser } from '../Controllers/user.js';

const router = express.Router();

router.get('/getAllUser',getUser)
router.post('/createUser',createuser)
router.get('/checkUser',checkEmail)
router.patch('/updateuser',updateUser)
router.delete('/deleteUser',deleteUserByEmail)
router.post('/addEvent',addEvent)
router.delete('/deleteEvent',deleteEvent)

export default router;