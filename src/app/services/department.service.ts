import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddDepartment } from '../models/AddDepartment';
import { environment } from 'src/environments/environment';
import { Deparment } from '../models/Department';
import { SecurityService } from './security.service.service';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient,
    private securityService : SecurityService) { }

  addDepartment(request : AddDepartment){
    return this.httpClient.post(environment.baseUrl + 'api/Department/AddDepartment', request);
  }

  getDepartmentsByManager(){
    debugger;
    return this.httpClient.get<Deparment[]>(environment.baseUrl + 'api/Department/GetDepartmentsByManager?managerId=' + this.securityService.getUserId());

  }
}
