import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  todos:any[]=[];
  newTask:string = '';

  constructor(private todoService:TodoService){

  }
  
  ngOnInit(): void {
      this.getTodos()
  }
  getTodos():void {
    this.todoService.getTodo().subscribe(todos=>this.todos=todos)
  }
  addTodo():void {
    if(this.newTask.trim()!==''){
      this.todoService.addTodo(this.newTask,false).subscribe(todo=>{
        this.todos.push(todo);
        this.newTask = ''
      })
    }
  }
  handleDelete(index:number):void {
    // this.todos.splice(index,1)
    this.todoService.deleteTodo(index)
  }
}
