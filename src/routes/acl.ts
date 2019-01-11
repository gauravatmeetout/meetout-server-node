import { Router } from 'express';
import { ACLController } from '../controllers/acl';

const aclController = new ACLController();
export const ACLRouter: Router = Router();

ACLRouter.post("/role/add", aclController.getReqMethod("insertRole"));
ACLRouter.get("/role/all", aclController.getReqMethod("getAllRoles"));
ACLRouter.get("/role/get/:slug", aclController.getReqMethod("getRole"));
ACLRouter.post("/permission/add", aclController.getReqMethod("insertPermission"));
ACLRouter.get("/permission/all", aclController.getReqMethod("getAllPermissions"));
ACLRouter.get("/permission/get/:slug", aclController.getReqMethod("getPermission"));
