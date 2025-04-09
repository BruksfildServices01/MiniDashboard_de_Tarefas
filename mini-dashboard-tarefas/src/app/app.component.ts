import { Component, ViewChild } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    TaskFormComponent,
    TaskListComponent,
    MatCardModule
  ],
  template: `
  <mat-toolbar color="primary" class="header">
    <span>📝 MiniDashboard de Tarefas</span>
  </mat-toolbar>

  <div class="wrapper">
    <mat-card class="card">
      <app-task-form (add)="addTask($event)"></app-task-form>
      <app-task-list #taskList></app-task-list>
    </mat-card>
  </div>
`,
styles: [`
  .wrapper {
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    background-color: #f2f4f8;
    min-height: 100vh;
  }

  .card {
    width: 100%;
    max-width: 600px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border-radius: 16px;
    background: white;
  }

  .header {
    font-weight: 500;
    font-size: 1.25rem;
  }
`]

})
export class AppComponent {
  @ViewChild('taskList') taskList!: TaskListComponent;

  constructor(private taskService: TaskService) {}

  addTask(title: string) {
    this.taskService.addTask(title);
    this.taskList.loadTasks(); // força a lista recarregar
  }
}
