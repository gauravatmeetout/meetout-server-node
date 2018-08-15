
import {Request,Response} from "express";
import {User,UserModel} from "../models/user";
import {BaseController} from "../libs/baseController";

export class UserController extends BaseController{
    
    private userModel:UserModel;

    public constructor() {
        super();
        this.userModel=new UserModel();
    }

    public async insert(req:Request,res:Response){
        await this.userModel.insert(req.body)  
        res.json(req.body);  
    }

    public async getUser(req:Request,res:Response){
        var user=await this.userModel.getUserById(req.params.id);
        res.send(user);
    }

    public async  fetchAll(req:Request,res:Response){
        var users=await this.userModel.getAllUsers({});
        res.send(users);
    }
}