
import { Request, Response } from "express";
import { ACLModel } from "../models/acl";
import { BaseController } from "../libs/baseController";

export class ACLController extends BaseController {

    private aclModel: ACLModel;

    public constructor() {
        super();
        this.aclModel = new ACLModel();
    }

    public async insertRole(req: Request, res: Response) {
        let role= await this.aclModel.insertRole(req.body)
        res.json(role);
    }

    public async getRole(req: Request, res: Response) {
        var role = await this.aclModel.getRoleByslugName(req.params.slug);
        res.send(role);
    }

    public async  getAllRoles(req: Request, res: Response) {
        var roles = await this.aclModel.getAllRoles({});
        res.send(roles);
    }

    public async insertPermission(req: Request, res: Response) {
        await this.aclModel.insertPermission(req.body)
        res.json(req.body);
    }

    public async getPermission(req: Request, res: Response) {
        var permission = await this.aclModel.getPermissionByslugName(req.params.slug);
        res.send(permission);
    }

    public async  getAllPermissions(req: Request, res: Response) {
        var permissions = await this.aclModel.getPermission({});
        res.send(permissions);
    }
}