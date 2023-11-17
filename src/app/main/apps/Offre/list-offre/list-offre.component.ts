import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
 
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { offre } from 'app/auth/models/offre';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ServicesService } from '../../services.service';
import { UpdateOffreComponent } from '../update-offre/update-offre.component';
import Swal from 'sweetalert2';
import { AddOffreComponent } from '../add-offre/add-offre.component';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.scss']
})
export class ListOffreComponent implements OnInit {
  public sidebarToggleRef = false;
  public rows;
  public data: any;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = '';
  public previousPlanFilter = '';
  public previousStatusFilter = '';
  tablestyle='bootstrap';
  closeResult :String;
  editForm:FormGroup;
  userFile;
userlist:any;
  imgURL: any;
  imagePath: any;
  message: string;
  formBuilder: any;
  loader=true;
  public edited = false;
  public selectRole: any = [
    { name: 'All', value: '' },
    { name: 'Admin', value: 'Admin' },
    { name: 'Livreur', value: 'Livreur' },
    { name: 'Editor', value: 'Editor' },
    { name: 'Maintainer', value: 'Maintainer' },
    { name: 'Subscriber', value: 'Subscriber' }
  ];

  public selectPlan: any = [
    { name: 'All', value: '' },
    { name: 'Basic', value: 'Basic' },
    { name: 'Company', value: 'Company' },
    { name: 'Enterprise', value: 'Enterprise' },
    { name: 'Team', value: 'Team' }
  ];

  public selectStatus: any = [
    { name: 'All', value: '' },
    { name: 'Pending', value: 'Pending' },
    { name: 'Active', value: 'Active' },
    { name: 'Inactive', value: 'Inactive' }
  ];

  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public searchValue = '';
  personl:offre; reactiveForm: FormGroup;
  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  IsLoading: boolean;
 

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {UserListService} _userListService
   * 
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _userListService: ServicesService,
    
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService
    , private router:ActivatedRoute,private rout:Router,private modalService: NgbModal,
    public Person : ServicesService
    ,private fb:FormBuilder
  ) {
    this._unsubscribeAll = new Subject();
  }
  /*open(content) {
    const ref = this.modalService.open(AddPersonnelComponent,  { size: 'lg', backdrop: 'static' });
         
  }*/
  open(){
 
    const ref = this.modalService.open(AddOffreComponent,  { size: '', backdrop: 'static' });
         
    
        ref.result.then((yes) => {
          console.log("Yes Click");
          },
          (cancel) => {
            console.log("Cancel Click");
    
          })
    }
    
  getDismissReason(reason: any) {
    throw new Error('Method not implemented.');
  }

  filterUpdate(event) {
    // Reset ng-select on search
    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.data.filter(function (d) {
      return d.nomOffre.toLowerCase().indexOf(val) !== -1 || !val;
  
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  
  submitted:boolean=false;

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
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

Loadin() {
  this.edited=true;

setTimeout (() => {
    this.edited=false
  }, 3600);

 

}
  editItem(Per:offre){
 
    const ref = this.modalService.open(UpdateOffreComponent,  { size: 'lg', backdrop: 'static' });
        ref.componentInstance.personl = Per;
    console.log(Per);
        ref.result.then((yes) => {
          console.log("Yes Click");
          },
          (cancel) => {
            console.log("Cancel Click");
    
          })
    }/*
    ViewItem(Per:personnel){
 
      const ref = this.modalService.open(UserViewComponent,  { size: 'lg', backdrop: 'static' });
          ref.componentInstance.personl = Per;
      console.log(Per);
          ref.result.then((yes) => {
            console.log("Yes Click");
            },
            (cancel) => {
              console.log("Cancel Click");
      
            })
      }
    */ 
    deleteItem(per: offre) {

      this.Person.DeleteOffre(per.id).subscribe(res=>{
        this.IsLoading=true;

        setTimeout(()=>{    
         this.ListOffre();
  
          //Swal.fire("Element Supprimé avec sucées !!!")
      
         },500);
           
   
  
 
     });
 
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
  /**
   * Filter By Roles
   *
   * @param event
   */
  filterByRole(event) {
    const filter = event ? event.value : '';
    this.previousRoleFilter = filter;
    this.temp = this.filterRows(filter, this.previousPlanFilter, this.previousStatusFilter);
    this.rows = this.temp;
  }

  /**
   * Filter By Plan
   *
   * @param event
   */
  filterByPlan(event) {
    const filter = event ? event.value : '';
    this.previousPlanFilter = filter;
    this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
    this.rows = this.temp;
  }

  /**
   * Filter By Status
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : '';
    this.previousStatusFilter = filter;
    this.temp = this.filterRows(this.previousRoleFilter, this.previousPlanFilter, filter);
    this.rows = this.temp;
  }

  /**
   * Filter Rows
   *
   * @param roleFilter
   * @param planFilter
   * @param statusFilter
   */
  filterRows(roleFilter, planFilter, statusFilter): any[] {
    // Reset search on select change
    this.searchValue = '';

    roleFilter = roleFilter.toLowerCase();
    planFilter = planFilter.toLowerCase();
    statusFilter = statusFilter.toLowerCase();

    return this.data.filter(row => {
      const isPartialNameMatch = row.userName.toLowerCase().indexOf(roleFilter) !== -1 || !roleFilter;
      const isPartialGenderMatch = row.currentPlan.toLowerCase().indexOf(planFilter) !== -1 || !planFilter;
      const isPartialStatusMatch = row.status.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
      return isPartialNameMatch && isPartialGenderMatch && isPartialStatusMatch;
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  role :any;
   Role(){/*
    this.Person.getListOfPersonByid(this.personl.idUser).subscribe(response => {
    
      this.userlist = response['roles'][0];
    this.role=  this.userlist['name']
  console.log(this.userlist['name']);
    })*/
  }
  get f(){return this.editForm.controls}
  ListOffre(){

    this.Person.getListOffre().subscribe( res => {
     
      
      this.data = res;
      this.rows = this.data;
      //this.tempData = this.rows;
     
     console.log(this.rows);
       
    });
  }
  ngOnInit(): void {
   this.ListOffre()
    
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
