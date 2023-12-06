import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@fake-db/fake-db.service';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { ContextMenuModule } from '@ctrl/ngx-rightclick';

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { coreConfig } from 'app/app-config';
import { AuthGuard } from 'app/auth/helpers/auth.guards';
import { fakeBackendProvider } from 'app/auth/helpers'; // used to create fake backend
import { JwtInterceptor, ErrorInterceptor } from 'app/auth/helpers';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ContextMenuComponent } from 'app/main/extensions/context-menu/context-menu.component';
import { AnimatedCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/animated-custom-context-menu/animated-custom-context-menu.component';
import { BasicCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/basic-custom-context-menu/basic-custom-context-menu.component';
import { SubMenuCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/sub-menu-custom-context-menu/sub-menu-custom-context-menu.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { DatatablesModule } from './main/tables/datatables/datatables.module';
import { DatePipe } from '@angular/common';
import { AddOffreComponent } from './main/apps/Offre/add-offre/add-offre.component';
import { ListOffreComponent } from './main/apps/Offre/list-offre/list-offre.component';
import { UpdateOffreComponent } from './main/apps/Offre/update-offre/update-offre.component';
import { PageLayoutsModule } from './main/ui/page-layouts/page-layouts.module';
import { ListVoitureComponent } from './main/apps/voiture/list-voiture/list-voiture.component';
import { AddVoitureComponent } from './main/apps/voiture/add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './main/apps/voiture/update-voiture/update-voiture.component';
import { ListPaiementComponent } from './main/apps/paiement/list-paiement/list-paiement.component';
import { ListCommandeComponent } from './main/apps/commande/list-commande/list-commande.component';
import { ListCommentaireComponent } from './main/apps/commentaire/list-commentaire/list-commentaire.component';
import { ReservationContratComponent } from './main/apps/reservation-contrat/reservation-contrat.component';
import { NgxPrintModule } from 'ngx-print';
import { ListEchangeComponent } from './main/apps/Echange/list-echange/list-echange.component';
import { AddEchangeComponent } from './main/apps/Echange/add-echange/add-echange.component';
import { UpdateUserComponent } from './main/apps/user/update-user/update-user.component';
import { UpdateCommandeComponent } from './main/apps/commande/update-commande/update-commande.component';
 

  
 
const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'apps',
    loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'ui',
    loadChildren: () => import('./main/ui/ui.module').then(m => m.UIModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'components',
    loadChildren: () => import('./main/components/components.module').then(m => m.ComponentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'extensions',
    loadChildren: () => import('./main/extensions/extensions.module').then(m => m.ExtensionsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forms',
    loadChildren: () => import('./main/forms/forms.module').then(m => m.FormsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tables',
    loadChildren: () => import('./main/tables/tables.module').then(m => m.TablesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Offre',
    loadChildren: () => import('./main/apps/Offre/offre.module').then(m => m.OffreModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Offre',
    loadChildren: () => import('./main/apps/Offre/offre.module').then(m => m.OffreModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Echange',
    loadChildren: () => import('./main/apps/Echange/echange.module').then(m => m.EchangeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contrat',
    loadChildren: () => import('./main/apps/reservation-contrat/contrat.module').then(m => m.ContratModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ListContrat',
    loadChildren: () => import('./main/apps/reservation-contrat/contrat.module').then(m => m.ContratModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'vente',
    loadChildren: () => import('./main/apps/vente/vente.module').then(m => m.VenteModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'location',
    loadChildren: () => import('./main/apps/location/location.module').then(m => m.LocationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'charts-and-maps',
    loadChildren: () => import('./main/charts-and-maps/charts-and-maps.module').then(m => m.ChartsAndMapsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./main/apps/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'localhost:55423',
    redirectTo: '/pages/authentication/login-v2'
   
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContextMenuComponent,
    BasicCustomContextMenuComponent,
    AnimatedCustomContextMenuComponent,
    SubMenuCustomContextMenuComponent,
  UpdateOffreComponent,
    ListOffreComponent,
AddOffreComponent,  
ListVoitureComponent,
AddVoitureComponent,
UpdateVoitureComponent,
ListPaiementComponent,
ListCommandeComponent,
ListCommentaireComponent,
 ReservationContratComponent,
 ListEchangeComponent,
 AddEchangeComponent,
 UpdateUserComponent,UpdateCommandeComponent
    ],
  imports: [
    NgxPrintModule,
     FormsModule,
    ReactiveFormsModule,
   DatatablesModule,
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    NgbModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    ContextMenuModule,
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    CardSnippetModule,
    LayoutModule,
    ContentHeaderModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      // ! IMPORTANT: Provider used to create fake backend, comment while using real API
    fakeBackendProvider
  ],
  entryComponents: [BasicCustomContextMenuComponent, AnimatedCustomContextMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
