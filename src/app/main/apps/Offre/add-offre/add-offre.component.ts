import { HttpHeaders } from '@angular/common/http';
 
import { ColumnMode } from '@swimlane/ngx-datatable';
import { offre } from 'app/auth/models/offre';
import { ServicesService } from '../../services.service';
//import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
 
@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.scss']
})
export class AddOffreComponent implements OnInit {

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
    personl:offre=new offre(); 
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
        nomOffre:new FormControl('',[Validators.required]),
        dateOffre:new FormControl('',[Validators.required]),
        adresse:new FormControl('',[Validators.required]),
        photo:new FormControl('',[Validators.required]),
        prod:new FormControl('',[Validators.required]),
        photo2:new FormControl('',[Validators.required,Validators.nullValidator])
      });
        
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
  /* this.personl.nomOffre=article.nomOffre;
    this.personl.dateOffre=article.dateOffre;
    this.personl.adresse=article.adresse;
   this.personl.photo2=article.photo2+".png";
   this.personl.photo=article.userFile;*/
  // Créez une date au format JavaScript
     // Convertissez-la en chaîne au format "YYYY-MM-DD"
   
    formData.append('nomOffre',article.nomOffre);
    formData.append('dateOffre',article.dateOffre);
    formData.append('adresse',article.adresse);
    formData.append('photo2',article.photo2+".png");
    formData.append('photo',article.photo);
    formData.append('file',this.userFile);  
    formData.append('prod',article.prod);  
      //console.log("cabin"+this.myGroup.value.cabins)
   // this.personl.cabins=article.cabin;*/
   // this.personl.cabins=article.cabin;
     
    this.Person.CreateOffre(formData,article.prod).subscribe( data => {   
      this.Loading();
       if(article.photo2=="vente")
       {
     //this.modalService.open(VenteComponent);
    
 }
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
