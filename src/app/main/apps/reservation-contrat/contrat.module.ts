import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ReservationContratComponent } from './reservation-contrat.component';
import { ContratVenteComponent } from './contrat-vente/contrat-vente.component';
import { ContratEchangeComponent } from './contrat-echange/contrat-echange.component';
 

const routes: Routes = [
  {
    path: 'AddContrat',
    component: AddReservationComponent,
  } ,{
    path: 'ListContrat',
    component: ReservationContratComponent,
  } 

];
@NgModule({
  declarations: [
    
  

  
    ContratVenteComponent,
                ContratEchangeComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ContratModule { }
