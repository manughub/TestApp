import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../Joke';

@Component({
  selector: 'app-joke-form',
  template: `
  <input type="text" placeholder="Enter the setup" #setup><P>
  <input type="text" placeholder="Enter the punchline" #punchLine><P>
  <button (click)="addJoke(setup.value, punchLine.value)">Add Joke</button>
  `
  ,
  styleUrls: ['./joke-form-component.component.css']
})
export class JokeFormComponentComponent implements OnInit {

  joke: Joke;

  @Output() jokeCreated = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
    
  }

  addJoke(setup, punchLine) {
    this.jokeCreated.emit(new Joke (setup, punchLine));
  }

}
