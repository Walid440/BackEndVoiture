import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { offre } from 'app/auth/models/offre';
import { ServicesService } from '../../services.service';
import { echange } from 'app/auth/models/echange';

@Component({
  selector: 'app-add-echange',
  templateUrl: './add-echange.component.html',
  styleUrls: ['./add-echange.component.scss']
})
export class AddEchangeComponent implements OnInit {
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
  personl:echange=new echange(); 
  reactiveForm: FormGroup;
  delete=false;
  userFile;
  userlist:any;
  userlist1:any;
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
offre:any;
  constructor(private fb:FormBuilder,private modalService: NgbModal,public modal:NgbActiveModal, public Person: ServicesService) { }

  ngOnInit(): void {
   
    this.editForm=new FormGroup({
      propritaire1:new FormControl('',[Validators.required]),
      modele1:new FormControl('',[Validators.required]),
      marque1:new FormControl('',[Validators.required]),
      annee1:new FormControl('',[Validators.required]),
      offre:new FormControl('',[Validators.required])
     });
      this.listOffre();
 this.listVehicule()
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
 this.personl.propritaire1=article.propritaire1;
  this.personl.annee1=article.annee1;
  this.personl.marque1=article.marque1;
  this.personl.modele1=article.modele1;

// Créez une date au format JavaScript
   // Convertissez-la en chaîne au format "YYYY-MM-DD"
  
 
    //console.log("cabin"+this.myGroup.value.cabins)
 // this.personl.cabins=article.cabin;*/
 // this.personl.cabins=article.cabin;
   
 this.Person.CreateEchange(this.personl,article.offre).subscribe( data => {   
    this.Loading();
     
   });
  
  
}

listOffre(){
  this.Person.getListOffre().subscribe( data => {   
    this.userlist1=data;       
    console.log("list1"+this.userlist1)
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
