import { Role } from './role';

export interface User {
    id: Number;
    username: String;
    password: String;
    firstName: String;
    lastName: String;
    role: Role;
}
