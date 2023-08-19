import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddManagerComponent } from './component/add-manager/add-manager.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './component/home/home.component';
import { AddDepartmentComponent } from './component/add-department/add-department.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ManagerEmployeeComponent } from './component/manager-employee/manager-employee.component';
import { ManagerTasksComponent } from './component/manager-tasks/manager-tasks.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { EmployeeTasksComponent } from './component/employee-tasks/employee-tasks.component';

//const routes: Routes = [];

const routes: Routes = [
  { path: '', component:  HomeComponent , canActivate: [AuthGuard]},
  { path: 'login', component:  LoginComponent},
  { path: 'addManager', component:  AddManagerComponent , canActivate: [AuthGuard]},
  { path: 'addDepartment', component:  AddDepartmentComponent , canActivate: [AuthGuard]},
  { path: 'addEmployee', component:  AddEmployeeComponent , canActivate: [AuthGuard]},
  { path: 'managerEmployee', component:  ManagerEmployeeComponent , canActivate: [AuthGuard]},
  { path: 'managerTasks', component:  ManagerTasksComponent , canActivate: [AuthGuard]},
  { path: 'addTask', component:  AddTaskComponent , canActivate: [AuthGuard]},
  { path: 'employeeTasks', component:  EmployeeTasksComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
