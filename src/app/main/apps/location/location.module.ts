import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
import { LocationComponent } from './location.component';
 
  

const routes: Routes = [
  {
    path: 'ListLocation',
    component: LocationComponent,
  } 

];
@NgModule({
  declarations: [
    
  
 
   
   ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LocationModule { }
