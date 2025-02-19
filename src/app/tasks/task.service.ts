import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Task {
  title: string;
  description: string;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/task`);
  }

  createTask(taskData: Task, productId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/task/${productId}`, taskData);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/task/${id}`);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/task/${id}`);
  }

  updateTask(id: number, taskData: Task): Observable<any> {
    return this.http.patch(`${this.apiUrl}/task/${id}`, taskData);
  }
}
