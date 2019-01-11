import * as mongoose from 'mongoose';

const RoleSchema = mongoose.Schema;
export default new RoleSchema({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    description: {
        type: String
    },
    slug: {
        type: String
    },
    users: {
        type:Array
    },
    permissions:{
        type:Array
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});