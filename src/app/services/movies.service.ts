import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { MOVIES } from '../constants/mock-movies';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string =
    'https://6263b553005a66e1e3b642df.mockapi.io/movies/';
  private movies: Movie[];
  public filteredMovies$ = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) {
    const isMoviesInlocalStorage = localStorage.getItem('movieList');

    if (isMoviesInlocalStorage) {
      this.movies = JSON.parse(isMoviesInlocalStorage);
    } else {
      this.movies = MOVIES;
    }
    this.filteredMovies$.next(this.movies);
  }

  getMovies() {
    return this.http.get<Movie[]>(this.baseUrl);
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

  addMovie(newMovie: Movie) {
    // this.movies.push(newMovie);
    // this.filterMovie('');
    // localStorage.setItem('movieList', JSON.stringify(this.movies));
    // this.filteredMovies$.next(this.movies);
    return this.http.post<Movie>(this.baseUrl, newMovie);
  }

  deleteMovie(id: string) {
    // const deleteIndex = this.movies.findIndex((movie) => movie.id === id);
    // this.movies.splice(deleteIndex, 1);
    // localStorage.setItem('movieList', JSON.stringify(this.movies));
    // this.filteredMovies$.next(this.movies);
  }

  sortByOption(option: string) {
    const sortedMovies = Array.from(this.movies);
    sortedMovies.sort((a: any, b: any) => {
      if (a[option] < b[option]) {
        return -1;
      } else if (a[option] > b[option]) {
        return 1;
      } else {
        return 0;
      }
    });

    this.filteredMovies$.next(sortedMovies);
  }

  // logMovies(): void {
  //   console.log('filteredMovies: ', this.filteredMovies$);
  // }
}
