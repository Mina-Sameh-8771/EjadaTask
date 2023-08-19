import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddNewManager } from '../models/AddNewManager';
import { ManagerLookup } from '../models/ManagerLookup';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  addNewManager(request : AddNewManager){
    return this.httpClient.post(environment.baseUrl + 'api/Manager/AddNewManager', request);
  }

  getManagers(){
    return this.httpClient.get<ManagerLookup[]>(environment.baseUrl + 'api/Manager/GetManagers');
  }
}
