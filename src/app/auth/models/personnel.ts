import { Role } from './role';
import { Roles } from './Roles';

export class personnel {
  id: number;
  matriculevehicule: string;
  permis: string;
  cartegrise: string;
  photo:string;
  salaire: number;
  montant_l: number;
  idUser:number;
  userName:string;
  password:string;
  cin:string;
  tel:string;
  roles:Roles;
  role:Role;
}
