import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddNewEmployee } from 'src/app/models/AddNewEmployee';
import { Deparment } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  data: AddNewEmployee = {username:'', email:'' , birthday : new Date() , name : '', phoneNumber: '' , departmentId:0};
  deparmentItems : Deparment[];

  constructor(private employeeService : EmployeeService,
    private departmentService : DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.departmentService.getDepartmentsByManager().subscribe(response  => {
      this.deparmentItems = response;
    }); 
  }

  addNewEmployee(form: NgForm , action: any){

    let departmentId:string = action._value;

    if(departmentId === undefined){
      alert('Please Select Department');
      return;
    }
    this.data.departmentId = Number(departmentId) ;

    this.employeeService.addNewEmployee(this.data).subscribe({
      next: response => {
        alert('Employee Add Successfully');
        this.router.navigate(["/managerEmployee"]);
      },
      error: err => {}
    })
  }

}
