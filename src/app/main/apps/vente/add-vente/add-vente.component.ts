import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { offre } from 'app/auth/models/offre';
import { ServicesService } from '../../services.service';
import { vente } from 'app/auth/models/vente';

@Component({
  selector: 'app-add-vente',
  templateUrl: './add-vente.component.html',
  styleUrls: ['./add-vente.component.scss']
})
export class AddVenteComponent implements OnInit {

  editForm:FormGroup;
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public temp = [];
  public previousRoleFilter = '';
  public previousPlanFilter = '';
  public previousStatusFilter = '';
  closeResult :String;
  public searchValue = '';
  personl:vente=new vente(); 
  reactiveForm: FormGroup;
  delete=false;
  userFile;
  userlist:any;
  imgURL: any;
  imagePath: any;
  message: string;
  formBuilder: any;
  loader=true;
  tempData: any;
  table: any;
  public ColumnMode = ColumnMode;
  submitted: boolean;
  public edited = false;
  Cabin: any;
  public editable: boolean;
  myGroup: FormGroup;
  IsLoading: boolean;
list: offre;
  constructor(private fb:FormBuilder,private modalService: NgbModal,public modal:NgbActiveModal, public Person: ServicesService) { }

  ngOnInit(): void {
   
    this.editForm=new FormGroup({
      voiture:new FormControl('',[Validators.required]),
      ClientAcheteur:new FormControl('',[Validators.required]),
      AgentDeVente:new FormControl('',[Validators.required]),
      StatutVente:new FormControl('',[Validators.required]),
      DateVente:new FormControl('',[Validators.required]),
      prix:new FormControl('',[Validators.required]),
      offre:new FormControl('',[Validators.required]),
     
    });
      
 this.listVehicule()
 this.listOffre()
  }
  
listOffre(){
  this.Person.getListOffre().subscribe( data => {   
    this.userlist=data;       
    console.log(this.userlist)
        });
}
  filterUpdate(event) {
    // Reset ng-select on search
   
    const val = event.target.value.toLowerCase();

    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.permis.toLowerCase().indexOf(val) !== -1 ||   d.cartegrise.toLowerCase().indexOf(val) !== -1 ||  d.role.toLowerCase().indexOf(val) !== -1 ||  d.matriculevehicule.toLowerCase().indexOf(val) !== -1 ||  !val;
    });

    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;
  }
  onverif(){
    const article = this.editForm.value;
    if(article.cin==null)
    {
    
     this.submitted=false;
    }
    else{
      this.submitted=true;

    }
  }
  
  RoleError =false;
  
  get f(){return this.editForm.controls} 

  Loading() {
    this.IsLoading=true;
  this.editForm.disabled;
  setTimeout (() => {
      this.IsLoading=false
      this.editForm.enabled;
     
    }, 1820);
this.modal.close();
   

}
onSubmit() {
  let headers = new HttpHeaders();

  const formData = new  FormData();
  const article = this.editForm.value;
 this.personl.VoitureA=article.voitureA;
  this.personl.AgentDeVente=article.AgentDeVente;
  this.personl.DateVente=article.DateVente;
 this.personl.ClientAcheteur=article.ClientAcheteur;
 this.personl.prix=article.prix;
// Créez une date au format JavaScript
   // Convertissez-la en chaîne au format "YYYY-MM-DD"
 
  /*formData.append('voitureA',article.voiture);
  formData.append('clientAcheteur',article.clientAcheteur);
  formData.append('prix',article.prix);
 formData.append('DateVente',article.DateVente);
 formData.append('offre',article.offre);
 formData.append('StatutVente',article.StatutVente);*/

    //console.log("cabin"+this.myGroup.value.cabins)
 // this.personl.cabins=article.cabin;*/
 // this.personl.cabins=article.cabin;






  this.Person.CreateVente(this.personl,article.offre).subscribe( data => {   
    this.Loading();
    
   });
  
  
}
listVehicule(){

  this.Person.getAllVehicule().subscribe( data => {   
this.list=data;       

console.log(data)
   });
}
Loadin() {
  this.modal.close();

setTimeout (() => {

 
}, 5200);



}
onSelectFile(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile = file;
   // this.f['profile'].setValue(file);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    //this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}

}




}
