import { Component, OnInit } from '@angular/core';
import { Joke } from '../Joke'

@Component({
  selector: 'app-joke-list',
  template: `
  <app-joke-form (jokeCreated) = "addJoke($event)"> </app-joke-form>
  <app-joke *ngFor="let j of jokes" [joke]=j> </app-joke>
  `,
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
jokes: Joke[];

  constructor() {
  this.jokes = [
   new Joke("Question line", "punchLine1"),
   new Joke("Question line2", "punchLine2")
  ]

   }

   addJoke(joke: Joke) {
   this.jokes.unshift(joke);
   }

  ngOnInit() {
  }

  

}
