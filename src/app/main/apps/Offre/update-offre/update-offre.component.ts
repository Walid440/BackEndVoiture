import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { offre } from 'app/auth/models/offre';
 
import Swal from 'sweetalert2';
import { ServicesService } from '../../services.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.scss']
})
export class UpdateOffreComponent implements OnInit {

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
    dateStr!:string ;
    userFile;
  userlist:any;
    imgURL: any;
    imagePath: any;
    message: string;
    formBuilder: any;
    loader=true;
    tempData: any;
    table: any;
    role:any;
    public ColumnMode = ColumnMode;
    submitted: boolean;
    public edited = false;
    //roles:Roles=new Roles();
    constructor(private fb:FormBuilder,private modalService: NgbModal,public modal:NgbActiveModal, public Person : ServicesService) { }
    dateOffre:any;
    id:any;
    ngOnInit(): void {
    
    this.editForm = this.fb.group({
  id:[this.personl.id, Validators.required],
      nomOffre:[this.personl.nomOffre, Validators.required],
      dateOffre: [this.personl.dateOffre, Validators.required],
      adresse: [this.personl.adresse, Validators.required],
      photo: [this.personl.photo, Validators.required],
      type: [this.personl.type, Validators.required],
    })
  }
  
  convertToText() {
   const dateInput = document.getElementById('dateOffre') as HTMLInputElement;
   if (dateInput.value === '') 
    { dateInput.type="text";
     this.editForm.get('dateOffre').setValue(this.personl.dateOffre);
    }
  }
// Exemple d'utilisation



  Role(){
    /*this.Person.getListOfPersonByid(this.personl.idUser).subscribe(response => {
       this.userlist = response['roles'][0];
      this.role=  this.userlist['idroles'];
   console.log(this.userlist['name']);
    })*/
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
    validat(value){
  if (this.editForm.value.role==="")
  {
    this.RoleError=false;
  
  }
  else   {
    this.RoleError=true;
  }
  console.log(this.RoleError)
    
    }
    get f(){return this.editForm.controls} 
  
    Loading() {
      this.loader=true;
    this.editForm.disabled;
    setTimeout (() => {
        this.loader=false
        this.editForm.enabled;
      }, 1800);
  
     
  
  }
  onSubmit() {
   
     const formData = new  FormData();
    const article = this.editForm.value;
    this.personl.adresse=article.adresse;
    this.personl.dateOffre=article.dateOffre;
    this.personl.nomOffre=article.nomOffre;
    this.personl.photo=article.phot;
    this.personl.type=article.type;
  
    formData.append('Offre',JSON.stringify(article));
    formData.append('file',this.userFile);  
    this.Person.EditOffre(this.personl).subscribe( data => {   
      this.Loading();
      
      this.Loadin();
      this.modal.close();
     })
    
  }
  Loadin() {
  this.edited=true;
  
  
  setTimeout (() => {
    this.edited=false;
    Swal.fire("Element Modifier avec succes",'success');
  }, 500);
  
  
  
  }
  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
  
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
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
