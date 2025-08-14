import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  nextId = 1;

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: this.nextId++,
        title: this.newTodo.trim(),
        completed: false
      });
      this.newTodo = '';
    }
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  saveEdit(todo: Todo, newTitle: string) {
    if (newTitle.trim()) {
      todo.title = newTitle.trim();
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo) {
    todo.editing = false;
  }
}
