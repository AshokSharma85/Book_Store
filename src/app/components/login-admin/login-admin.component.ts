import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageUsersService } from '../../services/manage-users.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  customer:any;
  admin:any;
  email:string;
  password:string;
  isSubmitted: boolean = false;
  checkError:boolean=false;
  checkInfo:boolean=false;
  errorMessage:string;
  constructor(private service:ManageUsersService) {
    
    }

  ngOnInit(){
    
    

  }
  onSubmit(form:NgForm)
  { console.log(this.email);
    console.log(this.password);
    this.checkInfo=false;
    this.checkError=false;
    
    this.service.loginAdmin(this.email,this.password).subscribe(
    (data)=>
    { 
      form.reset();
      this.admin=data;
      this.checkInfo=true;
      this.checkError=false;
      // alert("LoggedIn Succesfully");
      console.log(this.admin);
      window.location.href="/manageadmin";
      localStorage.setItem("adminId",this.admin.adminId);
      localStorage.setItem("email",this.admin.email);
      localStorage.setItem("fullName",this.admin.fullName);
      localStorage.setItem("password",this.admin.password);
      localStorage.setItem("role","admin");

    },
    
    (error)=>
    {console.log(this.email);
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
        localStorage.setItem("role","customer");

      },
      
      (error)=>
      {this.errorMessage=error.error;
        this.checkError=true;
        this.checkInfo=false;
      });
    }
  
  
  );
}

}
