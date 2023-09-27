import { offre } from './offre';
import { Role } from './role';
import { Roles } from './Roles';

export class produit {
  id: number;
  nomProd: string;
  marque: string;
  modele: string;
  prix:string;
  annee: number;
  offre: offre;
 
}
