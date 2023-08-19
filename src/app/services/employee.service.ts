import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddNewEmployee } from '../models/AddNewEmployee';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee';
import { SecurityService } from './security.service.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient,
    private securityService : SecurityService) { }

  addNewEmployee(request : AddNewEmployee){
    return this.httpClient.post(environment.baseUrl + 'api/Employee/AddNewEmployee', request);
  }

  getEmployeesByManager(){
    return this.httpClient.get<Employee[]>(environment.baseUrl + 'api/Employee/GetEmployeeByManager?managerId=' + this.securityService.getUserId());
  }

  RemoveEmployeeFromDepartment(employeeId : number , departmentId : number){
    return this.httpClient.post(environment.baseUrl + 'api/Employee/RemoveEmployeeFromDepartment' , {employeeID : employeeId , departmentID: departmentId});

  }
}
