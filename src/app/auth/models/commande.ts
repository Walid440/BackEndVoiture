 import { client } from "./client";
import { paiement } from "./paiement";
import { produit } from "./produit";
import { status } from "./status";


export class commande{
   id:number; 
   dateDebut:any;
   dateFin:any;
   client:client;
   prix:any;
   status:status;
   prod:produit;
   paie:paiement | null;

}