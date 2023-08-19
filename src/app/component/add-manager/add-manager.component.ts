import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddNewManager } from 'src/app/models/AddNewManager';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {
  data: AddNewManager = {username:'', email:'' , birthday : new Date() , name : '', phoneNumber: ''};

  constructor(private adminService : AdminService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  addNewManager(form: NgForm){
    this.adminService.addNewManager(this.data).subscribe({
      next: response => {
        alert('Manager Add Successfully');
        this.router.navigate(["/"]);

      },
      error: err => {}
    })
  }

}
