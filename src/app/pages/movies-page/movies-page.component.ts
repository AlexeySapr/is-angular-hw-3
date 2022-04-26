import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  public allMovies: Movie[] = [];
  private movieSubscr?: Subscription;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieSubscr = this.movieService.movies$.subscribe((val) => {
      this.allMovies = val;
    });
  }

  selectOption(event: any) {
    const sortOption = event.target.value;
    this.movieService.sortByOption(sortOption);
  }

  ngOnDestroy(): void {
    if (this.movieSubscr) {
      this.movieSubscr.unsubscribe();
    }
  }
}
