import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
 

const routes: Routes = [
  {
    path: 'com',
    component: ListCommandeComponent,
  } 

];
@NgModule({
  declarations: [
    
  

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CommandeModule { }
