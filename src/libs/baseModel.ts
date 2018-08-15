import { DB } from "./db";

export class BaseModel {

    db: DB;

    protected connetDB() {
        this.db = new DB;
    }

}