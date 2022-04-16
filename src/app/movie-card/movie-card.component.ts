import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input('movieItem') movie?: Movie;
  @Input() isDarkTheme?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
