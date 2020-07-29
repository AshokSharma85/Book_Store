import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookStore';

  adminName=localStorage.getItem("fullName");
  role=localStorage.getItem("role");
  showAdmin=false;
  showCustomer=false;
  withoutLogin=true;

  ngOnInit(): void {
  this.loginConditions();
  }
  
  loginConditions():void
  {
    if(this.role=="admin")
  {
    this.showAdmin=true;
    this.withoutLogin=false;
  }
  else if(this.role=="customer")
  {
     this.showCustomer=true;
     this.withoutLogin=false;
  }
  }
  signout()
  {
    localStorage.clear();
    this.withoutLogin=true;
    this.showAdmin=false;
    this.showCustomer=false;
  }
}
