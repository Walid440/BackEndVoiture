import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { offre } from 'app/auth/models/offre';
import { ServicesService } from '../../services.service';
import Swal from 'sweetalert2';
import { produit } from 'app/auth/models/produit';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.scss']
})
export class AddVoitureComponent implements OnInit {

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
    userFile2;
    userFile3;
    userFile4;
    userlist:any;
    imgURL: any;
    imgURL2: any;
    imgURL3: any;
    imgURL4: any;
    imagePath: any;
    imagePath2: any;
    imagePath3: any;
    imagePath4: any;
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
        nomProd:new FormControl('',[Validators.required]),
        marque:new FormControl('',[Validators.required]),
        modele:new FormControl('',[Validators.required]),
        prix:new FormControl('',[Validators.required]),
        annee:new FormControl('',[Validators.required]),
        type:new FormControl('',[Validators.required]),
        boite:new FormControl('',[Validators.required]),

        couleur:new FormControl('',[Validators.required]),
        km:new FormControl('',[Validators.required]),
        photo1:new FormControl('',[Validators.required]),
        photo2:new FormControl('',[Validators.required]),
        photo3:new FormControl('',[Validators.required]),
        photo4:new FormControl('',[Validators.required]),
        photo5:new FormControl('',[Validators.required])
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
  
     
  
  }
  onSubmit() {
   
  
   const formData = new  FormData();
    const article = this.editForm.value;
    
   // formData.append('file',this.userFile);  
   formData.append('nomProd',article.nomProd);
   formData.append('marque',article.marque);
   formData.append('modele',article.modele);
   formData.append('annee',article.annee);
   formData.append('prix',article.prix);
   formData.append('couleur',article.couleur);
   formData.append('km',article.km);
   formData.append('type',article.type);
   formData.append('boite',article.boite);
   formData.append('photo1',article.photo1);
   formData.append('photo2',article.photo2);
   formData.append('photo3',article.photo3);
   formData.append('photo4',article.photo4);
   formData.append('file',this.userFile);  
   formData.append('file1',this.userFile2);  
   formData.append('file2',this.userFile3);  
   formData.append('file3',this.userFile4);  
     //console.log("cabin"+this.myGroup.value.cabins)
   // this.personl.cabins=article.cabin;*/
   // this.personl.cabins=article.cabin;
    
    this.Person.CreateProduit(formData).subscribe( data => {   
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
  onSelectFile2(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile2 = file;
     // this.f['profile'].setValue(file);
  
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }
  
    var reader = new FileReader();
    
    this.imagePath2 = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL2 = reader.result; 
    }
  }
  }
  onSelectFile3(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile3 = file;
     // this.f['profile'].setValue(file);
  
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }
  
    var reader = new FileReader();
    
    this.imagePath3 = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL3 = reader.result; 
    }
  }
  
  }
  onSelectFile4(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile4 = file;
     // this.f['profile'].setValue(file);
  
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }
  
    var reader = new FileReader();
    
    this.imagePath4 = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL4 = reader.result; 
    }
  }
  
  }
}