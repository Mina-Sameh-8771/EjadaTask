import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignedTask } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-manager-tasks',
  templateUrl: './manager-tasks.component.html',
  styleUrls: ['./manager-tasks.component.css']
})
export class ManagerTasksComponent implements OnInit {
  tasksItems : AssignedTask[];

  constructor(private taskService : TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.taskService.getTasksByManager().subscribe(response  => {
      this.tasksItems = response;
    }); 
  }

  removeTask(taskId : number){
    this.taskService.removeTask(taskId).subscribe(response => {
      alert('Task Has Been Removed');
      window.location.reload();
    });
  }

  goToAddTaskScreen(){
    this.router.navigate(["/addTask"]);

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
