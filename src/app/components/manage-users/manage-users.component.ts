import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from 'src/app/services/manage-users.service';
import { Admin } from 'src/app/models/admin';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


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


  showModal=false;
  adminId:any;


  ngOnInit(): void {
    this.getAllUsers();
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

  getAllUsers():void{
    this.manageUsersService.getAllUsers().subscribe(
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






}
