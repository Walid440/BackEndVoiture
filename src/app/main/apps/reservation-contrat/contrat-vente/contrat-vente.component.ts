import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { commande } from 'app/auth/models/commande';
import { offre } from 'app/auth/models/offre';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-contrat-vente',
  templateUrl: './contrat-vente.component.html',
  styleUrls: ['./contrat-vente.component.scss']
})
export class ContratVenteComponent implements OnInit {

  
  @ViewChild('content',{static:false})el!:ElementRef
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
  personl:commande=new commande(); 
  reactiveForm: FormGroup;
  delete=false;
  userFile;
  userlist: any;
  userlist2: any;
  userlist1: any;
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
  data: any;
  constructor( private datePipe: DatePipe, private http: HttpClient,private fb:FormBuilder,private modalService: NgbModal,public modal:NgbActiveModal, public Person: ServicesService) { }
styleString:string = '';
  ngOnInit(): void {
   
  
    this.ListCommandeByid()
  
 this.Type()
 this.Listclient()
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
  
Type() {
  this.Person.getType(this.personl.id).subscribe((res: any) => {
    this.userlist = res;
    
console.log(this.userlist)

  });
}
ListCommandeByid() {
  this.Person.getCommandeById(this.personl.id).subscribe((res: any) => {
    this.userlist1 = res;
   

     
  });
} Listclient() {
  this.Person.getCommandeById(this.personl.id).subscribe((res: any) => {
    this.userlist2 = res;
    

     
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


 
printToPDF() {
  const printArea: HTMLElement = document.getElementById('content');
  const printWindow = window.open('', 'PRINT')!;
  printWindow.document.write(`<html><head><style>${this.styleString}</style></head><body>${printArea.innerHTML}</body>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}



 


}



 









