import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { ListVoitureComponent } from './list-voiture/list-voiture.component';
 

const routes: Routes = [
 
  {
    path: 'listCar',
    component:ListVoitureComponent,
  }

];
@NgModule({
  declarations: [
    
  

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class voitureModule { }
