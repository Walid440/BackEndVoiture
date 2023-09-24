import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
 import { LocationComponent } from './location/location.component';
import { VenteComponent } from './vente/vente.component';
import { EchangeComponent } from './echange/echange.component';

const routes: Routes = [
  {
    path: 'listOff',
    component: ListOffreComponent,
  }
];
@NgModule({
  declarations: [
    EchangeComponent,
    LocationComponent,
    VenteComponent
  

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class OffreModule { }
