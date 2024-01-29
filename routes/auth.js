import express from "express";
import { addEvent, checkEmail, createuser, deleteEvent, deleteUserByEmail, getUser, updateUser, updateUserByID ,getAUser, getUserByID} from '../Controllers/user.js';
import authAdmin from "../Controllers/admin.js";

const router = express.Router();

router.get('/getAllUser',getUser)
router.post('/user',getAUser)
router.post('/userByID',getUserByID)
router.post('/createUser',createuser)
router.post('/checkUser',checkEmail)
router.put('/updateUser',updateUser)
router.put('/updateUserByID',updateUserByID)
router.delete('/deleteUser',deleteUserByEmail)
router.post('/addEvent',addEvent)
router.delete('/deleteEvent',deleteEvent)

router.post('/admin', authAdmin);

export default router;