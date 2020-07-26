import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { CustomerInformation } from '../../models/customer-information';
import { ManageUsersService } from '../../services/manage-users.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {
  customer:any;
  email:string;
  password:string;
  isSubmitted: boolean = false;
  checkError:boolean=false;
  checkInfo:boolean=false;
  errorMessage:string;
  constructor(private service:ManageUsersService) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    console.log(this.email);
    console.log(this.password);
    this.checkInfo=false;
    this.checkError=false;
    this.service.loginCustomer(this.email,this.password).subscribe(
    (data)=>
    { 
      form.reset();
      this.customer=data;
      this.checkInfo=true;
      this.checkError=false;
      alert("LoggedIn Succesfully")
      console.log(this.customer);
       window.location.href="/manageadmin";
       localStorage.setItem("email",this.customer.emailAddress);
      localStorage.setItem("fullName",this.customer.fullName);
      // localStorage.setItem("phoneNumber",this.customer.phoneNumber);
      // localStorage.setItem("address",this.customer.city+" "+this.customer.country);
      // localStorage.setItem("zipcode",this.customer.zipcode);
      // localStorage.setItem("registerDate",this.customer.registerDate);

    },
    
    (error)=>
    {this.errorMessage=error.error;
      this.checkError=true;
      this.checkInfo=false;
    });
  }

}
