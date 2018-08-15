import * as mongoose from 'mongoose';
import { BaseModel } from '../libs/baseModel';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    dob: {
        type: String
    },
    role: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
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