import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { AppComponent } from './app.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ManageUsersComponent,
    ManageCustomersComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
