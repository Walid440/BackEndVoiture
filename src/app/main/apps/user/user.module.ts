import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
import { UserComponent } from './user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
 

const routes: Routes = [
  {
    path: 'listUser',
    component: UserComponent,
  } 

];
@NgModule({
  declarations: [
    
  

  
   
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
