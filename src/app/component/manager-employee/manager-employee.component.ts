import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-manager-employee',
  templateUrl: './manager-employee.component.html',
  styleUrls: ['./manager-employee.component.css']
})
export class ManagerEmployeeComponent implements OnInit {
  employeeItems : Employee[];

  constructor(private employeeService : EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployeesByManager().subscribe(response  => {
      this.employeeItems = response;
    }); 
  }

  removeEmployee(employeeId : number , departmentId : number){
    this.employeeService.RemoveEmployeeFromDepartment(employeeId , departmentId).subscribe(response => {
      alert('Employee Has Been Removed');
      window.location.reload();
    });
  }

  goToAddEmployeeScreen(){
    this.router.navigate(["/addEmployee"]);

  }

}
