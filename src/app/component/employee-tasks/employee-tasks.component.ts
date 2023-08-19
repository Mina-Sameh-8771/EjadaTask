import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignedTask } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.css']
})
export class EmployeeTasksComponent implements OnInit {
  tasksItems : AssignedTask[];

  constructor(private taskService : TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.taskService.getTasksByEmployee().subscribe(response  => {
      this.tasksItems = response;
    }); 
  }

  complateTask(taskId : number){
    this.taskService.complateTask(taskId).subscribe(response => {
      alert('Task Has Been Complated');
      window.location.reload();
    });
  }

  getTaskStatusDescription(statusId: number){
    if(statusId == 1){
      return 'inPrograss';
    }
    else{
      return 'Complated';
    }
  }

  isTaskFinished(statusId : number){
    if(statusId == 2){
      return true;
    }
    return false;
  }

}
