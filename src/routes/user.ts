import { Router, Request, Response } from 'express';
import {UserController} from  "../controllers/user";

const userController=new UserController();
export const UserRouter: Router = Router();
UserRouter.post("/add",userController.getReqMethod("insert"));
UserRouter.get("/get-all",userController.getReqMethod("fetchAll"));
UserRouter.get("/get/:id",userController.getReqMethod("getUser"));
