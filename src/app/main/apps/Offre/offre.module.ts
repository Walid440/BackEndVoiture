import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
 

const routes: Routes = [
  {
    path: 'listOff',
    component: ListOffreComponent,
  } 

];
@NgModule({
  declarations: [
    
  

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class OffreModule { }
