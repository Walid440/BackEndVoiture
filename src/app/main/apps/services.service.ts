import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
 
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'app/auth/service';
import { offre } from 'app/auth/models/offre';
 
 
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public formData:  FormGroup; 
  list : offre[] = [] ;
  public UserListService:UserService;
 
  //private baseUrl1 = '/api/saveUserServer';
  host :string = "http://localhost:8090";
 private baseUrl = 'http://localhost:8089/SpringMVC/offre/';
   
  constructor(private  http: HttpClient) { }
  public dataForm:  FormGroup; 
  public getListOffre(){
    return this.http.get<offre>("http://localhost:8090/AllOffre");
    
  }
  public getOffreById(id:number){
    return this.http.get<offre>("http://localhost:8090/getIdOffre"+id);
    
  }

  
  create(id:number,start:string,end:string,offre: FormData) {
    return this.http.post<offre>("http://localhost:8089/SpringMVC/offre/CreateF/"+start+"/"+end+"/"+id,offre);  }
    UpdateFile(id:number,start:string,end:string,offre: offre) {
      return this.http.put<offre>("http://localhost:8089/SpringMVC/offre/UpdateF/"+id+"/"+start+"/"+end,offre);  }
  
  UpdatePhoto(id:number,formData:FormData) {
    return this.http.put<offre>("http://localhost:8089/SpringMVC/offre/UpdatePhoto/"+id,formData);  }

    UpdateF(id:number,start:string,end:string,offre: offre) {
      return this.http.put<offre>("http://localhost:8090/offre/UpdateF/"+id+"/"+start+"/"+end,offre);  }
  public EditOffre(person:offre){
    return this.http.put<offre>("http://localhost:8090/offre/UpdateOffre",person);
    
  }
  public CreateOffre(person:FormData){
    return this.http.post<offre>("http://localhost:8090/CreateOffre",person);
    
  }
 

    public search(start:string,end:string){
    return this.http.get<offre>("http://localhost:8089/SpringMVC/offre/calendars/search/"+start+"/"+end);
    
  }
  public DeleteOffre(id:number){
    return this.http.delete<offre>("http://localhost:8090/DeleteOffre/"+id);
    
  }
  public DelteFeedBack(id:number){
    return this.http.delete<offre>("http://localhost:8089/SpringMVC/Feed/DeleteFeed/"+id);
    
  }
  public Statis(id:number){
    return this.http.get<offre>("http://localhost:8089/SpringMVC/Feed/stat/"+id);
    
  }
  public getFeryById(id:number){
    return this.http.get<any>("http://localhost:8089/SpringMVC/Ferry/getIdFerry/"+id);
    
  }
  public getAllPassenger()
  {
    return this.http.get<any>("http://localhost:8089/SpringMVC/Passenger/getAllPassenger");


  }
  public getAllFeed()
  {
    return this.http.get<offre>("http://localhost:8089/SpringMVC/Feed/getAllFeedBack");


  }
  public getCalendarByid(id:number)
  {
    return this.http.get<offre>("http://localhost:8089/SpringMVC/calendars/"+id);


  }
  rows:any;
  public onUserListChanged: BehaviorSubject<any>;

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getDataTableRows()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8090/SpringMVC/Ferry/personnels').subscribe((response: any) => {
        this.rows = response;
        this.onUserListChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}
