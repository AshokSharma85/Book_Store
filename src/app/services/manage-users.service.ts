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


  getAllUsers():Observable<any>
  {
    return this.http.get("http://localhost:1138/admin/getallusers/101")
  }

  addAdmin(admin:Admin):Observable<any>
  {
    console.log(admin);
    let url="http://localhost:1138/admin/addAdmin";
    return this.http.post(url,admin,{responseType:'text'});
  }

  addCustomer(customerInformartion:CustomerInformation):Observable<any>
  {
    console.log(customerInformartion);
    let url="http://localhost:1138//admin/addcustomers";
    return this.http.post(url,customerInformartion,{responseType:'text'});
  }
}
