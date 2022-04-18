import { Component, Input, OnInit } from '@angular/core';
import { MOVIES } from 'src/app/constants/mock-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies = MOVIES;
  @Input() isDarkTheme?: boolean;
  @Input('viewModeMovies') viewMode?: string;

  constructor() {}

  ngOnInit(): void {}
}
