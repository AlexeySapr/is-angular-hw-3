import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MOVIES } from '../constants/mock-movies';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class FindService {
  private movies: Movie[];
  public filteredMovies$ = new BehaviorSubject<Movie[]>([...MOVIES]);

  constructor() {
    this.movies = MOVIES;
  }

  filterMovie(movieStr: string): void {
    if (movieStr === '') {
      this.filteredMovies$.next(this.movies);
    } else {
      const afterFilter = this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(movieStr.toLowerCase())
      );
      this.filteredMovies$.next(afterFilter);
    }
  }

  // logMovies(): void {
  //   console.log('filteredMovies: ', this.filteredMovies$);
  // }
}
