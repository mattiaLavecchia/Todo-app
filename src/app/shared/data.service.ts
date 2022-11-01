import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  todos: Todo[] = [
    new Todo('ciao fantastica', true),
    new Todo('lorem impusdiajdioas askdpoaskd isojfp adjsifp dajf ipadsj fpadspfh iadspf iuadsn i')
  ]

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index:number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  deleteTodo(index:number) {
    this.todos.splice(index,1);
  }
}
