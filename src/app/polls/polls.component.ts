import { Component } from '@angular/core';

@Component({
  selector: 'polls',
  templateUrl: './polls.component.html'
})
export class PollsComponent {
  question: string = "Which front-end js framework is the best?";
  options: Array<string> = [
    'Angular 2',
    'React JS',
    'Backbone JS',
    'Vue JS',
  ];
}
