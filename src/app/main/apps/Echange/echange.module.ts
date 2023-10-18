import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
import { ListEchangeComponent } from './list-echange/list-echange.component';
import { AddEchangeComponent } from './add-echange/add-echange.component';
 

const routes: Routes = [
  {
    path: 'ListEchange',
    component: ListEchangeComponent,
  } 

];
@NgModule({
  declarations: [
    
  
 
   
   ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class EchangeModule { }
