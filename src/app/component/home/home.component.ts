import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private securityService : SecurityService) { }

  ngOnInit(): void {
  }

  getUserName(){
    return this.securityService.getUserName();
  }

}
