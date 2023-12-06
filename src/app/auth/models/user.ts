import { Role } from './role';

export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: any;
  avatar: string;
  telephone:string;
  permis:string;
  role: string;
  token?: string;
}
