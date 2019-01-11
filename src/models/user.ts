import * as mongoose from 'mongoose';
import { BaseModel } from '../libs/baseModel';
import  UserSchema from "./schemas/user";


export const User = mongoose.model('users', UserSchema);

export class UserModel extends BaseModel {

    constructor() {
        super();
        this.connetDB();
    }

    public insert(user) {
        let newUser = new User(user);
        return newUser.save();
    }

    public getAllUsers(filter) {
        return User.find({});
    }

    public getUserById(id:number){
        return User.findOne({_id:id});
    }
}