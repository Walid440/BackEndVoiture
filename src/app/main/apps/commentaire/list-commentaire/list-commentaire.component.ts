import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { commande } from 'app/auth/models/commande';
import { offre } from 'app/auth/models/offre';
import { Subject } from 'rxjs';
import { AddOffreComponent } from '../../Offre/add-offre/add-offre.component';
import { UpdateCommandeComponent } from '../../commande/update-commande/update-commande.component';
import { ServicesService } from '../../services.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-list-commentaire',
  templateUrl: './list-commentaire.component.html',
  styleUrls: ['./list-commentaire.component.scss']
})
export class ListCommentaireComponent implements OnInit {
date:any;
  chart: any = [];
  myForm !: Form;
  id !:number;
  public dat : any;
  editForm: FormGroup;
  //Reclamation :reclamations=new reclamations();
  //Task :task=new task();  
  //CounType :CountType=new CountType();
 //User :user =new user();
   constructor(private rec : ServicesService,private router:ActivatedRoute,private rout:Router) { }
   vb = document.getElementById('myChart');
    myChart: any;
   ngOnInit(): void {
     this.chart={
     count:null,
     type:null,
     }
     this.editForm=new FormGroup({
      date:new FormControl('',[Validators.required]),
       });

  
  
 




   this.id=this.router.snapshot.params['id'];
   /*this.rec.getuser(this.id).subscribe();*/
    
   
     this.getlist(this.id);
  //this.getlistUser();    
  
     
   }


   getCalendr()
   {
    console.log(this.date)
    this.rec.getCommentStatistic(this.editForm.value.date).subscribe(res=>{ this.dat=res
 
      this.chart = new Chart("canvas", {
              
       type: 'bar',
       data: {
         labels: ['TresUnsatisfait','Neutre','Satisfait','TresSatisfait'],
         datasets: [
           {
             data:this.dat[0][0]+this.dat[0][2]+this.dat[0][4]+this.dat[0][6],
             borderColor: 'blue',
              label: "Statistique",
             backgroundColor:['red', 'green', 'blue', 'magenta'],
             borderWidth: 1,
           },
         ],
       },
     });
   }); 
   }
   getlist(id:number){
  let we=[];
     /*  this.rec.getuser(id).subscribe(res=>{ this.dat=res
      let s=res.map((x: { count: any; })=>x.count)
     
      let y=res.map((x: { type: any; })=>x.type)
      console.log(res);
         this.chart = new Chart("canvas", {
           
           type: 'bar',
           data: {
             labels: y,
             datasets: [
               {
                 data:s,
                 borderColor: '#3e95cd',
                  label: "Statistique",
                 backgroundColor: 'rgba(93, 175, 89, 0.1)',
                 borderWidth: 1,
               },
             ],
           },
         });
       });*/
          
      }

}
