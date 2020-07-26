import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { AppComponent } from './app.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginCustomerComponent } from './components/login-customer/login-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    ManageUsersComponent,
    ManageCustomersComponent,
    CreateCustomerComponent,
    LoginAdminComponent,
    LoginCustomerComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,AppRoutesModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
