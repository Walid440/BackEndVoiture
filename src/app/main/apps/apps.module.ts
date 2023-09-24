import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { DeleteFournisseurComponent } from './fournisseur/delete-fournisseur/delete-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { UpdateFournisseurComponent } from './fournisseur/update-fournisseur/update-fournisseur.component';

 
import { ListOffreComponent } from './Offre/list-offre/list-offre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatatablesModule } from '../tables/datatables/datatables.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UpdateOffreComponent } from './Offre/update-offre/update-offre.component';
 

// routing
const routes: Routes = [
  
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'Offre',
    loadChildren: () => import('./Offre/offre.module').then(m => m.OffreModule)
  }
];

FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]);

@NgModule({
  declarations: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [CommonModule, RouterModule.forChild(routes),ReactiveFormsModule,FormsModule,DatatablesModule,NgxDatatableModule],
})
export class AppsModule {}
