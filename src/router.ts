import {Router} from "express";
import {UserController} from "./controllers/UserController";
import {TagController} from "./controllers/TagController";
import {ensureAdmin} from "./middlewares/ensureAdmin";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {ComplimentController} from "./controllers/ComplimentController";
import {ensureAuthenticate} from "./middlewares/ensureAuthenticate";

const router = Router()

const userController = new UserController() 
const tagController = new TagController() 
const authenticateUserController = new AuthenticateUserController() 
const complimetController = new ComplimentController() 

router.post('/users', ensureAuthenticate, userController.save)
router.get('/users', userController.index)
router.post('/tags', ensureAuthenticate, ensureAdmin, tagController.save)
router.get('/tags', ensureAuthenticate, ensureAdmin, tagController.index)
router.post('/login', authenticateUserController.login)
router.post('/complimemts', ensureAuthenticate, complimetController.save)
router.get('/complimemts/send', ensureAuthenticate, complimetController.listUserSentComplimemts)
router.get('/complimemts/recive', ensureAuthenticate, complimetController.listUserReceiveComplimemts)

export {router}
