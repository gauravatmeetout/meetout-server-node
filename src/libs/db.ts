import * as mongoose from "mongoose";

export class DB {

    public mongoUrl: string = 'mongodb+srv://root:pass_123@meetout-jvary.mongodb.net/Meetout?retryWrites=true';

    constructor() {
        this.connect();
    }

    private connect(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
} 