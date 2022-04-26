import { Role } from "../classes/role";
import { Specialization } from "./specialization";

export class User {

    public id : string;
    public firstname : string;
    public lastname : string;
    public email : string;
    public role : Role;
    public spec: Specialization;

    constructor(id :string, firstname : string, lastname : string, email : string, role : Role, spec: Specialization) {
  
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.role = role;
        this.spec = spec;
}
}
