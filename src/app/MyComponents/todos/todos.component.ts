import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent{
  todos:Todo[] = [];

  constructor(){
    this.todos = [
      {
        sno:1,
        title: "This is title",
        desc: "Description",
        active: true
      },
      {
        sno:2,
        title: "This is title 2",
        desc: "Description 2",
        active: true
      },
      {
        sno:3,
        title: "This is title 3",
        desc: "Description 3",
        active: true
      },
    ]
  }
}
