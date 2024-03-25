import { Component, Input } from '@angular/core';
import { CARDS, ICard } from '../card';
import { RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [MyCardsComponent, RouterOutlet, DatePipe, CommonModule],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.css'
})

export class MyCardsComponent {
  @Input() card: ICard = {
    id: 0,
    name: "",
    date: new Date(),
    priority: 0
  };

  getBackgroundColor(): string {
    switch(this.card.priority){
      case 1:
        return 'rgb(165, 204, 217)';
          break;
      case 2:
        return 'rgb(157, 194, 207)';
          break;
      case 0:
        return 'rgb(227, 227, 227)';
          break;
      default:
        return 'lightgray';
          break;
    }
  }
  getCrossedText() : string{
    if(this.card.priority == 0){
      return 'line-through';
    }
    else{
      return '';
    }
  }
  setExclaminationMark() : string{
    if(this.card.priority <= 1){
      return this.card.name = '!' + this.card.name;
    }
    else{
      return this.card.name;
    }
  }
}

