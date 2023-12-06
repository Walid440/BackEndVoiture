import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/   /documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'dashboard',
    title: 'admon',
    translate: 'MENU.DASHBOARD.COLLAPSIBLE',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'home',
    badge: {
      title: '2',
      translate: 'MENU.DASHBOARD.BADGE',
      classes: 'badge-light-warning badge-pill'
    }
  },
  // Apps & Pages
  {
    id: 'apps',
    type: 'section',
    title: 'Application',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
    
      {
        id: 'e-commerce',
        title: 'Offre',
       
        type: 'collapsible',
        icon: 'package',
        children: [
          
          {
            id: 'email',
        title: 'Liste',
        
        type: 'item',
        icon: 'circle',
        url: 'apps/Offre/listOff'
          },
          {
            id: 'Echange',
            title: 'Echange',
   
            type: 'item',
            icon: 'circle',
            url: 'apps/Echange/ListEchange'
          },
          {
            id: 'Vente',
            title: 'Vente',
            
            type: 'item',
            icon: 'circle',
            url: 'apps/vente/ListVente'
          },
          {
            id: 'Location',
            title: 'Location',
            
            type: 'item',
            icon: 'circle',
            url: 'apps/location/ListLocation'
          }
        ]
      },
      {
        id: 'User',
    title: 'User',
    
    type: 'item',
    icon: 'user',
    url: 'apps/user/listUser'
      },
      {
        id: 'chat',
        title: 'voiture',
        type: 'item',
        icon:'truck',
        url: 'apps/voiture/listCar'
      },
      {
        id: 'Paiement',
        title: 'Paiement',
         type: 'item',
        icon: 'dollar-sign',
        url: 'apps/paiement/pay'
      },
      {
        id: 'Commande',
        title: 'Commande',
    
        type: 'item',
        icon: 'command',
        url: 'apps/commande/com'
      },{
        id: 'Commentaire',
        title: 'Commentaire',
      
        type: 'item',
        icon:'bar-chart',
        url: 'apps/comment/comment'
      }
       
     
      
    ]
  }
];
