import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../../services/manage-users.service';
import { CustomerInformation } from '../../models/customer-information';
import { NgForm } from '@angular/forms';
import { QueryResponseDTO } from '../../models/query-response-dto';
import { ExceptionResponseDTO } from '../../models/exception-response-dto';

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


  public queryResponse:QueryResponseDTO;
  public exceptionResponse:ExceptionResponseDTO;
  public noOfPages=[];


  showModal=false;
  email:any;

  ngOnInit(): void {
    this.getAllCustomers(1);
  }
  checkAddCustomer: boolean = false;
  checkManageCustomer: boolean = true;
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
    this.getAllCustomers(1);
    this.toggleManageCustomer();
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

  /**
  * Method:getAllCustomers 
  * is to fetch customers data if admin credentials are valid
  */
 public getAllCustomers(pageNumber:number)
 {
    this.manageUsersService.getAllCustomers("Admin2@capgemini.com","Admin@123",13740,pageNumber).subscribe(
      (data:QueryResponseDTO)=>
      {
        this.queryResponse=data;
        this.noOfPages=new Array(this.queryResponse.totalNoOfPages);
        console.log(this.queryResponse);

      },(error)=>{
        this.exceptionResponse=error.error;
        console.log(this.exceptionResponse.reason);
      }
    );
 }


 openDialog(email)
  {
    this.email=email;
    this.showModal=true;
  }
  closeDialog()
  {
    this.showModal=false;
  }
  deleteCustomer()
  {
    this.manageUsersService.deleteCustomer(this.email).subscribe(
      data=>{
        console.log(data);
        this.getAllCustomers(1);
        this.showModal=false;
        alert("Customer Deleted Successfully");
      },
      error=>{
       alert(error.error);
       this.showModal=false;
      }
    )
  }
}
