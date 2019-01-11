import * as mongoose from 'mongoose';

const PermissionSchema = mongoose.Schema;
export default new PermissionSchema({
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
    created_date: {
        type: Date,
        default: Date.now
    }
});