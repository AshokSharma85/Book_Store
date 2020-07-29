import { Component, OnInit } from '@angular/core';
import { CustomerInformation } from '../../models/customer-information';
import { ManageUsersService } from '../../services/manage-users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private manageUsersService:ManageUsersService) { }
  customerInformation:CustomerInformation=new CustomerInformation();
  errorMessage;
  errorMessageCondition=false;
  ngOnInit(): void {
  }

  addCustomer(form:NgForm):void
  {
     this.manageUsersService.addCustomer(this.customerInformation).subscribe(data=>
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
    alert("Profile Created SuccessFully Please Login to continue...");
    window.location.href="/login"; 
    },
    error=>{
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
    });
  }
}
