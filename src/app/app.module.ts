import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { AddManagerComponent } from './component/add-manager/add-manager.component';
import { TokenInterceptor } from './interceptor/TokenInterceptor';
import { HomeComponent } from './component/home/home.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { LoadingInterceptor } from './interceptor/LoadingInterceptor';
import { AddDepartmentComponent } from './component/add-department/add-department.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ManagerEmployeeComponent } from './component/manager-employee/manager-employee.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ManagerTasksComponent } from './component/manager-tasks/manager-tasks.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { EmployeeTasksComponent } from './component/employee-tasks/employee-tasks.component';
import { GlobalHttpInterceptorService } from './interceptor/GlobalHttpInterceptorService';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';


export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddManagerComponent,
    HomeComponent,
    SpinnerComponent,
    AddDepartmentComponent,
    ManagerEmployeeComponent,
    AddEmployeeComponent,
    ManagerTasksComponent,
    AddTaskComponent,
    EmployeeTasksComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        //allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
