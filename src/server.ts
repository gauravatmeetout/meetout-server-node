import App from "./libs/app";
import { UserRouter } from "./routes/user";
import { ACLRouter } from "./routes/acl";
const PORT = 3000;
App.server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
App.server.use("/user", UserRouter);
App.server.use("/acl", ACLRouter);
App.server.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});