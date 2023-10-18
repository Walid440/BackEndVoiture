import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
 
import { VenteComponent } from './vente.component';
 

const routes: Routes = [
  {
    path: 'ListVente',
    component: VenteComponent,
  } 

];
@NgModule({
  declarations: [
    
  
 
   
   ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class VenteModule { }
