import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/LoginModel';
import { AuthenticatedResponse } from '../models/AuthenticatedResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
    private router:Router) { }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }

  logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

  login(login : LoginModel){  
    return this.httpClient.post<AuthenticatedResponse>(environment.baseUrl + 'api/Security/Login', login);
  }

  isAdmin(){
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      if( this.jwtHelper.decodeToken(token).role == 'Admin')
        return true;
    }
    return false;
  }

  getUserId(){
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return Number(this.jwtHelper.decodeToken(token).primarysid);
    }
    return 0;
  }

  getUserName(){
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return this.jwtHelper.decodeToken(token).unique_name;
    }
    return '';
  }

  isManager(){
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      if( this.jwtHelper.decodeToken(token).role == 'Manager')
        return true;
    }
    return false;
  }

  isEmployee(){
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      if( this.jwtHelper.decodeToken(token).role == 'Employee')
        return true;
    }
    return false;
  }

}
