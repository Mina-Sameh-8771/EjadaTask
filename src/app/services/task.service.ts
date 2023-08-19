import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SecurityService } from './security.service.service';
import { AssignedTask } from '../models/Task';
import { AddTask } from '../models/AddTask';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient,
    private router:Router,
    private securityService : SecurityService) { }

    getTasksByManager(){
      return this.httpClient.get<AssignedTask[]>(environment.baseUrl + 'api/Task/GetTasksByManager?managerId=' + this.securityService.getUserId());
    }

    getTasksByEmployee(){
      return this.httpClient.get<AssignedTask[]>(environment.baseUrl + 'api/Task/GetTasksByEmployee?employeeId=' + this.securityService.getUserId());
    }

    removeTask(taskId : number){
      return this.httpClient.delete(environment.baseUrl + 'api/Task/RemoveTask?taskId=' + taskId);
    }

    complateTask(taskId : number){
      return this.httpClient.get(environment.baseUrl + 'api/Task/ComplateTask?taskId=' + taskId);
    }

    addTask(task : AddTask){
      return this.httpClient.post(environment.baseUrl + 'api/Task/AddNewTask' , task);
    }
}
