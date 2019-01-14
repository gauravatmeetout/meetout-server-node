import * as mongoose from 'mongoose';
import { BaseModel } from '../libs/baseModel';
import RoleSchema from "./schemas/role";
import PermissionSchema from "./schemas/permission";


export const Role = mongoose.model('roles', RoleSchema);
export const Permission = mongoose.model('permission', PermissionSchema);

export class ACLModel extends BaseModel {

    constructor() {
        super();
        this.connetDB();
    }

    public insertRole(role) {
        let roleObj = new Role(role);
        return roleObj.save();
    }

    public getAllRoles(filter) {
        return Role.find(typeof filter != "undefined" ? filter : {});
    }

    public getRoleByslugName(slug: string) {
        return Role.findOne({ slug: slug });
    }

    public insertPermission(permission, roleAr = []) {
        let permissionObj = new Permission(permission);
        this.addPermissionToRole(roleAr,permissionObj);
        return permissionObj.save();
    }

    public addPermissionToRole(roleAr, permission) {
        roleAr.forEach(async roleSlug => {
            let role = await Role.findOne({ slug: roleSlug });
            if (role.permissions.indexOf(permission.slug) < 0) {
                role.permissions.push(permission.slug);
                role.save();
            }
        });
    }

    public getPermission(filter) {
        return Permission.find(typeof filter != "undefined" ? filter : {});
    }

    public getPermissionByslugName(slug: string) {
        return Permission.findOne({ slug: slug });
    }
}
