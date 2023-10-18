import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ReservationContratComponent } from './reservation-contrat.component';
import { ContratVenteComponent } from './contrat-vente/contrat-vente.component';
import { ContratEchangeComponent } from './contrat-echange/contrat-echange.component';
import { ListEchangeComponent } from '../Echange/list-echange/list-echange.component';
  

const routes: Routes = [
  {
    path: 'AddContrat',
    component: AddReservationComponent,
  } ,{
    path: 'ListContrat',
    component: ReservationContratComponent,
  } ,{
    path: 'ListEchange',
    component: ListEchangeComponent,
  } 

];
@NgModule({
  declarations: [
    
  

  
    ContratVenteComponent,
                ContratEchangeComponent,
   ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ContratModule { }
