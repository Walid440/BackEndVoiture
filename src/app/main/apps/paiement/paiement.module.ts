import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPaiementComponent } from './list-paiement/list-paiement.component';
 
  

const routes: Routes = [
 
  {
    path: 'pay',
    component:ListPaiementComponent,
  }

];
@NgModule({
  declarations: [
    
  

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class paiementModule { }
