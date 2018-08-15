export class BaseController {

    getReqMethod(methodName: string) {

        if (typeof this[methodName] != "undefined") {
            return this[methodName].bind(this);
        }else{
            throw "Invalid Method of Controller";
        }

    }

}