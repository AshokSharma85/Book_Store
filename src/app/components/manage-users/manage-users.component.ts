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
  adminName=localStorage.getItem("fullName");
  addAdmins:Admin=new Admin();
  errorMessage;
  errorMessageCondition=false;
  updateAdminId: any;

  showModal=false;
  adminId:any;


  ngOnInit(): void {
    this.getAllUsers();
  }
  
  checkAddAdmin: boolean = false;
  checkManageAdmin: boolean = true;
  checkEditAdmin: boolean = false;
  public toggleAddAdmin(): void {
    if (this.checkAddAdmin == false) {
      this.checkAddAdmin = true;
      this.checkManageAdmin = false;
      this.checkEditAdmin = false;
    }
  }
  public toggleManageAdmin(): void {
    if (this.checkManageAdmin == false) {
      this.checkAddAdmin = false;
      this.checkManageAdmin = true;
      this.checkEditAdmin = false;
    }
  }

  public toggleEditAdmin(updateAdminId): void{
    this.updateAdminId = updateAdminId;
    this.checkEditAdmin = true;
    this.checkAddAdmin = false;
    this.checkManageAdmin = false;
  }

  adminIdFromLocalStorage=parseInt(localStorage.getItem("adminId"));;
  getAllUsers():void{
    this.manageUsersService.getAllUsers(this.adminIdFromLocalStorage).subscribe(
      (data)=>{this.admins=data}
    );
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
    this.getAllUsers();
    this.toggleManageAdmin();
    
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

  

  openDialog(adminId)
  {
    this.adminId=adminId;
    this.showModal=true;

  }
  closeDialog()
  {
    this.showModal=false;
  }
  deleteData:string;

  deleteUser()
  {
    this.manageUsersService.deleteUser(this.adminId).subscribe(
      data=>{
        this.deleteData=data;
        console.log(this.deleteData);
        alert("Admin Deleted Successfully");
        this.showModal=false;
        this.getAllUsers();
      
        
      },
      error=>{
        alert(error.error);
        this.showModal=false;
      }
    )
  }


  editAdmin(form: NgForm){

    
    this.manageUsersService.editAdmin(this.updateAdminId,this.addAdmins).subscribe(data=>
      {
      form.resetForm();
      
      this.errorMessageCondition=false;
      console.log("Data is "+data)
      alert(data); 
      this.getAllUsers();
      this.toggleManageAdmin();
      
      },
    
      error=>
    {
      this.errorMessageCondition=true;
      this.errorMessage=error.error;
      console.log("erroor occured",error);
    }
    );
  }

  signout()
  {
    localStorage.clear();
  }



}
