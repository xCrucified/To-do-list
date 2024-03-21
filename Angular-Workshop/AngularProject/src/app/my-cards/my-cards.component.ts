import { Component, Input } from '@angular/core';
import { ICard } from '../card';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [MyCardsComponent, RouterOutlet, DatePipe],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.css'
})
export class MyCardsComponent {
  @Input() card: ICard = {
    id: 0,
    name: "",
    date: new Date(),
  };
}
