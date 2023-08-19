import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTask } from 'src/app/models/AddTask';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  employeeItems : Employee[];
  data: AddTask = {description:'', submissionDate : new Date() , name : '',employeeID : 0};


  constructor(private employeeService : EmployeeService,
    private taskService : TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployeesByManager().subscribe(response  => {
      this.employeeItems = response;
    }); 
  }

  addNewTask(form: NgForm , action: any){

    let employeeId:string = action._value;

    if(employeeId === undefined){
      alert('Please Select Employee');
      return;
    }
    this.data.employeeID = Number(employeeId) ;

    this.taskService.addTask(this.data).subscribe({
      next: response => {
        alert('Task Add Successfully');
        this.router.navigate(["/managerTasks"]);
      },
      error: err => {}
    })
  }

}
