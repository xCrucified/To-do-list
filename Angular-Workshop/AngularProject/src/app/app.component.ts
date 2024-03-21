import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { CARDS, ICard } from './card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'List of Users';
  cards: ICard[] = CARDS;
}

