import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from 'src/app/services/manage-users.service';
import { Admin } from 'src/app/models/admin';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private manageUsersService:ManageUsersService) { }
  admins:Admin[]=[];

  addAdmins:Admin=new Admin();
  errorMessage;
  errorMessageCondition=false;

  ngOnInit(): void {
    this.manageUsersService.getAllUsers().subscribe(
      (data)=>{this.admins=data}
    );
  }
  
  checkAddAdmin: boolean = false;
  checkManageAdmin: boolean = true;
  public toggleAddAdmin(): void {
    if (this.checkAddAdmin == false) {
      this.checkAddAdmin = true;
      this.checkManageAdmin = false;
    }
  }
  public toggleManageAdmin(): void {
    if (this.checkManageAdmin == false) {
      this.checkAddAdmin = false;
      this.checkManageAdmin = true;
    }
  }


  addAdmin(form:NgForm):void
  {
    this.manageUsersService.addAdmin(this.addAdmins).subscribe(data=>
    {
      /**
     * This will reset the form after successfully submitted the data
     */

    form.resetForm();
    /*
    *The div which shows error will hide after making ngif false
    */

    this.errorMessageCondition=false;
    console.log("Data is "+data)
    alert(data); 
    window.location.href="http://localhost:4201/manageadmin";
    },
  
    error=>
  {
    
    /*
    *The condition of div become true and that div will show respective error
    */
    this.errorMessageCondition=true;

    /*
    *Json.parse function convert string into object to work with
    */
    // this.errorMessage=JSON.parse(error.error).message;
    this.errorMessage=error.error;
    console.log("erroor occured",error);
  }
  );

  }


}
