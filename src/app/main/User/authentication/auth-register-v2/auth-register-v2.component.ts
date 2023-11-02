import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';
import { ServicesService } from 'app/main/apps/services.service';
import { User } from 'app/auth/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth-register-v2',
  templateUrl: './auth-register-v2.component.html',
  styleUrls: ['./auth-register-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthRegisterV2Component implements OnInit {
  // Public
  public coreConfig: any;
  public passwordTextType: boolean;
  public registerForm: FormGroup;
  public submitted = false;
    personl:User=new User(); 
  // Private
  private _unsubscribeAll: Subject<any>;
active:boolean=false;
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(public modal:NgbActiveModal,public Person : ServicesService,private _coreConfigService: CoreConfigService, private _formBuilder: FormBuilder) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
  
    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  
  }
 
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  Annuler(){

    this.modal.close();
    
    }
  addData() {
    const formData = new  FormData();
    const article = this.registerForm.value;
  this.personl.firstName=article.firstName;
    this.personl.lastName=article.lastName;
    this.personl.email=article.email;
    this.personl.password=article.password;
   this.personl.role=this.registerForm.get("role").value;
 
  console.log(this.registerForm.value.email)
  
  // Créez une date au format JavaScript
     // Convertissez-la en chaîne au format "YYYY-MM-DD"
   console.log(this.active)
     
   
   if(this.active===false)
   {
    this.Person.Recherche(this.registerForm.value.email).subscribe( res => {
      if (res && res['email'] === this.registerForm.value.email) {
        this.active = false;
        Swal.fire("Email déjà existant ! Veuillez utiliser une autre adresse.");
      } else {
        this.Person.Register(this.personl).subscribe();
      }
      
  
  });
   }
      
  
  
}
}


