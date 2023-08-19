import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from 'src/app/models/AuthenticatedResponse';
import { LoginModel } from 'src/app/models/LoginModel';
import { SecurityService } from 'src/app/services/security.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: LoginModel = {username:'', password:''};
  invalidLogin: boolean;


  constructor(private router: Router , private securityService : SecurityService) { }

  ngOnInit(): void {
  }

  login = ( form: NgForm) => {
    this.securityService.login(this.credentials).subscribe({
      next: (response: AuthenticatedResponse) => {
        const token = response.jwtToken;
        if(response.isLogin){
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.router.navigate(["/"]);
        }
        else{
          this.invalidLogin = true; 
        }
        
      },
      error: (err: HttpErrorResponse) => this.invalidLogin = true
    })
  }

}
