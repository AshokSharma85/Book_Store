import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { CustomerInformation } from '../models/customer-information';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:1138";

  getAllUsers(adminId):Observable<any>
  {
    
    return this.http.get(this.url+"/admin/getallusers/"+adminId);
  }

  addAdmin(admin:Admin):Observable<any>
  {
    return this.http.post(this.url+"/admin/addAdmin",admin,{responseType:'text'});
  }

  addCustomer(customerInformartion:CustomerInformation):Observable<any>
  {
    return this.http.post(this.url+"/admin/addcustomers",customerInformartion,{responseType:'text'});
  }


  deleteUser(deleteUser:any)
  {
    return this.http.delete<any>(this.url+"/admin/deleteUser/"+deleteUser);
  }

  deleteCustomer(deleteCustomer:any)
  {
    return this.http.delete<any>(this.url+"/admin/deleteCustomer/"+deleteCustomer);
  }

  getAllCustomers(adminEmail:string,adminPassword:string,adminId:number,pageNumber:number)
  {
     return this.http.get(this.url+"/admin/getallcustomers/"+adminEmail+"/"+adminPassword+"/"+adminId+"/"+pageNumber);
  }

  editAdmin(adminId: number,admin:Admin){
    return this.http.put(this.url+"/admin/editAdmin/"+adminId,admin,{responseType:'text'});
  }

  editCustomer(email:any,customerInformation:CustomerInformation){
    console.log(email);
    return this.http.put(this.url+"/admin/updatecustomer/"+email,customerInformation,{responseType:'text'});
  }

  loginAdmin(email:string, password:string)
  {
    return this.http.get(this.url+"/adminlogin?email="+email+"&password="+password);
  }

  loginCustomer(email:string, password:string)
  {
    return this.http.get(this.url+"/customerlogin?email="+email+"&password="+password);
  }
}
