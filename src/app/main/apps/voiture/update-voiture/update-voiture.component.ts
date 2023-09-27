import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { offre } from 'app/auth/models/offre';
import { produit } from 'app/auth/models/produit';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.scss']
})
export class UpdateVoitureComponent implements OnInit {

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
    personl:produit=new produit(); 
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
     
      
      this.editForm = this.fb.group({
        id:[this.personl.id, Validators.required],
            nomProd:[this.personl.nomProd, Validators.required],
            modele: [this.personl.modele, Validators.required],
            annee: [this.personl.annee, Validators.required],
            marque: [this.personl.marque, Validators.required],
            prix: [this.personl.prix, Validators.required],
          })


          this.listVehicule();
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
  
     
  
  }
  onSubmit() {
   
  
    //const formData = new  FormData();
    const article = this.editForm.value;
   this.personl.nomProd=article.nomProd;
    this.personl.marque=article.marque;
    this.personl.modele=article.modele;
   this.personl.annee=article.annee;
   this.personl.prix=article.prix;
  
   // formData.append('file',this.userFile);  
 

     //console.log("cabin"+this.myGroup.value.cabins)
   // this.personl.cabins=article.cabin;*/
   // this.personl.cabins=article.cabin;
    
    this.Person.EditProd(this.personl).subscribe( data => {   
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