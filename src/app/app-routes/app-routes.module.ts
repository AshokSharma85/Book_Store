import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ManageUsersComponent } from '../components/manage-users/manage-users.component';
import { ManageCustomersComponent } from '../components/manage-customers/manage-customers.component';

const appRoutes:Routes=[
  {path:'manageadmin',component:ManageUsersComponent},
  {path:'managecustomer',component:ManageCustomersComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutesModule { }
