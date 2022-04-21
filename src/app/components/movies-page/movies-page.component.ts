import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent {
  constructor(private movieService: MoviesService) {}

  selectOption(event: any) {
    const sortOption = event.target.value;
    this.movieService.sortByOption(sortOption);
    console.log('event: ', sortOption);
  }
}
