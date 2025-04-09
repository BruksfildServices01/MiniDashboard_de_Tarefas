import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly STORAGE_KEY = 'tasks';

  getTasks(): Task[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }

  addTask(title: string): void {
    const tasks = this.getTasks();
    const newTask: Task = {
      id: Date.now(),
      title,
      done: false,
      createdAt: new Date()
    };
    tasks.push(newTask);
    this.saveTasks(tasks);
  }

  updateTask(task: Task): void {
    const tasks = this.getTasks().map(t => t.id === task.id ? task : t);
    this.saveTasks(tasks);
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter(t => t.id !== id);
    this.saveTasks(tasks);
  }
}
