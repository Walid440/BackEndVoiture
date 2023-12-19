import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
import { StaistiqueComponent } from './staistique.component';
  
  

const routes: Routes = [
  {
    path: 'ListStatistique',
    component: StaistiqueComponent,
  } 

];
@NgModule({
  declarations: [
    
  
 
   
   ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class StaistiqueModule { }
