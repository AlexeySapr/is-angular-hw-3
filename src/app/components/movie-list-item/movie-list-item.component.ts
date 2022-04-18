import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent implements OnInit {
  @Input('movieItem') movie?: Movie;
  @Input() isDarkTheme?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
