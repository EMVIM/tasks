import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Todo {
  id: number;
  task: string;
}

@Component({
  selector: 'app-project-two',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './project-two.component.html',
  styleUrl: './project-two.component.scss',
})
export class ProjectTwoComponent {
  todoForm: FormGroup;
  todos: Todo[] = [];
  private idCounter = 0;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
  }

  addTask(): void {
    const taskValue: string = this.todoForm.value.task;
    if (taskValue) {
      const newTodo: Todo = { id: this.idCounter++, task: taskValue };
      this.todos.push(newTodo);
      this.todoForm.reset();
    }
  }

  removeTask(todoId: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}
