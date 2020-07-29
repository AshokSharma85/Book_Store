import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ManageUsersComponent } from '../components/manage-users/manage-users.component';
import { ManageCustomersComponent } from '../components/manage-customers/manage-customers.component';
import { CreateCustomerComponent } from '../components/create-customer/create-customer.component';
import { LoginCustomerComponent } from '../components/login-customer/login-customer.component';
import { LoginAdminComponent } from '../components/login-admin/login-admin.component';

const appRoutes:Routes=[
  {path:'manageadmin',component:ManageUsersComponent},
  {path:'managecustomer',component:ManageCustomersComponent},
  {path:'createcustomer',component:CreateCustomerComponent},
  {path:'login',component:LoginAdminComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutesModule { }
