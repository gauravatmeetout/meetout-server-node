// lib/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import { UserRouter } from "../routes/user";

class App {

    public server: express.Application;

    constructor() {
        this.server = express();
        this.init();
    }

    private init(): void {
        this.setMiddleWares();
    }

    private setMiddleWares() {
        // Middleware For JSON  application/json type post data
        this.server.use(bodyParser.json());
        // Middleware for post request application/x-www-form-urlencoded post data
        this.server.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App();