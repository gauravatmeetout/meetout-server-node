import App from "./libs/app";
import { UserRouter } from "./routes/user";
const PORT = 3000;  
App.server.use("/user",UserRouter);     
App.server.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});