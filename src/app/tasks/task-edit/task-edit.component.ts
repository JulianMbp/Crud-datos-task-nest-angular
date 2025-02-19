import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  taskForm: FormGroup;
  taskId: number;
  currentTask: any;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.taskId = +this.route.snapshot.paramMap.get('id')!;
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      completed: [false]
    });
  }

  ngOnInit() {
    this.loadTask();
  }

  loadTask() {
    this.taskService.getTaskById(this.taskId).subscribe({
      next: (task) => {
        this.currentTask = task;
        this.taskForm.patchValue({
          title: task.title,
          description: task.description,
          completed: task.completed || false
        });
      },
      error: (error) => {
        console.error('Error al cargar la tarea:', error);
        this.router.navigate(['/task']);
      }
    });
  }

  updateTask() {
    if (this.taskForm.valid) {
      const updateData = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        completed: Boolean(this.taskForm.value.completed)
      };

      this.taskService.updateTask(this.taskId, updateData).subscribe({
        next: () => {
          this.router.navigate(['/task']);
        },
        error: (error) => {
          console.error('Error al actualizar la tarea:', error);
        }
      });
    }
  }
}
