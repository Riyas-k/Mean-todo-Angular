import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private Url = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) {}

  getTodo(): Observable<any[]> {
    return this.http.get<any[]>(this.Url);
  }
  addTodo(task: string, completed: boolean): Observable<any> {
    return this.http.post(this.Url, { task, completed });
  }
  deleteTodo(index: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const params = new HttpParams().set('index', index.toString());
  
    return this.http.delete(`${this.Url}${params}`);
  }
  
}
