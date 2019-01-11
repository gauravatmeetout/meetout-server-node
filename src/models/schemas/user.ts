import * as mongoose from 'mongoose';

const UserSchema = mongoose.Schema;
export default new UserSchema({
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