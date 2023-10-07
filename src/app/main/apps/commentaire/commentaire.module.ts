import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 import { ListVoitureComponent } from '../voiture/list-voiture/list-voiture.component';
 import { ListCommentaireComponent } from './list-commentaire/list-commentaire.component';
 

const routes: Routes = [
  {
    path: 'comment',
    component: ListCommentaireComponent,
  } 

];
@NgModule({
  declarations: [
    
  

  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CommentModule { }
