import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDepartment } from 'src/app/models/AddDepartment';
import { ManagerLookup } from 'src/app/models/ManagerLookup';
import { AdminService } from 'src/app/services/admin.service';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  managerItems : ManagerLookup[];
  data: AddDepartment = {managerID:0 , name : ''};


  constructor(private adminService : AdminService ,
    private departmentService : DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.adminService.getManagers().subscribe(response  => {
      this.managerItems = response;
    }); 

    
  }

  addNewDeparment(form: NgForm , action: any){
    let managerId:string = action._value;

    if(managerId === undefined){
      alert('Please Select Manager');
      return;
    }
    this.data.managerID = Number(managerId) ;
    this.departmentService.addDepartment(this.data).subscribe({
      next: response => {
        alert('Department Add Successfully');
        this.router.navigate(["/"]);

      },
      error: err => {}
    })

    
    debugger;
  }

}
