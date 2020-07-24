import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../../services/manage-users.service';
import { CustomerInformation } from '../../models/customer-information';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  constructor(private manageUsersService:ManageUsersService) { }

  customerInformation:CustomerInformation=new CustomerInformation();
  errorMessage;
  errorMessageCondition=false;

  ngOnInit(): void {
  }
  checkAddCustomer: boolean = false;
  checkManageCustomer: boolean = false;
  public toggleAddCustomer(): void {
    if (this.checkAddCustomer == false) {
      this.checkAddCustomer = true;
      this.checkManageCustomer = false;
    }
  }
  public toggleManageCustomer(): void {
    if (this.checkManageCustomer == false) {
      this.checkAddCustomer = false;
      this.checkManageCustomer = true;
    }
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
    alert(data); 
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
