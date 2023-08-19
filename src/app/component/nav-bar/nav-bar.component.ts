import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private securityService : SecurityService) { }

  ngOnInit(): void {
  }

  isAdmin(){
    return this.securityService.isAdmin();
  }

  isManager(){
    return this.securityService.isManager();
  }

  isEmployee(){
    return this.securityService.isEmployee();
  }

  logOut(){
    return this.securityService.logOut();
  }

  isUserAuthenticated(){
    return this.securityService.isUserAuthenticated();
  }

}
