import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../Joke';

@Component({
  selector: 'app-joke',
  template: `
  
  <h3>{{data.setup}}</h3>
  <p [hidden]="data.hide"> {{data.punchLine}} </p>
  <button (click)="data.toggle()"> Tell me </button>
  `,
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
@Input('joke') data: Joke;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
