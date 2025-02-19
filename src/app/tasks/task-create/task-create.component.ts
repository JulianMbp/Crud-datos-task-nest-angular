import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './task-create.component.html'
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      productId: ['', Validators.required],
      completed: [false]
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.taskService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    });
  }

  createTask() {
    if (this.taskForm.valid) {
      const { productId, ...taskData } = this.taskForm.value;
      
      this.taskService.createTask(taskData, productId).subscribe({
        next: () => {
          this.router.navigate(['/task']);
        },
        error: (error) => {
          console.error('Error al crear la tarea:', error);
        }
      });
    }
  }
}
