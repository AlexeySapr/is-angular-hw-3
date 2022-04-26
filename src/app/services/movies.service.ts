import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

  public movies$ = new BehaviorSubject<Movie[]>([]);
  public favoriteMovies$ = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) {
    this.fetchMovies();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  private fetchMovies(): void {
    this.http
      .get<Movie[]>(this.baseUrl)
      .pipe(catchError(this.handleError))
      .subscribe((resp) => {
        this.movies$.next(resp);
        const newFavorite = this.movies$.value.filter((m) => m.isFavorite);
        this.favoriteMovies$.next(newFavorite);
      });
  }

  addMovie(newMovie: Movie): void {
    this.http
      .post<Movie>(this.baseUrl, newMovie)
      .pipe(catchError(this.handleError))
      .subscribe((resp) => {
        this.movies$.next([...this.movies$.value, resp]);
      });
  }

  updateMovie(movie: any): void {
    movie.isFavorite = !movie.isFavorite;
    this.http
      .put(`${this.baseUrl}${movie.id}`, movie)
      .pipe(catchError(this.handleError))
      .subscribe(() => {
        const newFavorite = this.movies$.value.filter((m) => m.isFavorite);
        this.favoriteMovies$.next(newFavorite);
      });
  }

  deleteMovie(id: string): void {
    this.http
      .delete(`${this.baseUrl}${id}`)
      .pipe(catchError(this.handleError))
      .subscribe(() => {
        const afterDeleteMovies = this.movies$.value.filter((m) => m.id !== id);
        this.movies$.next(afterDeleteMovies);
      });
  }

  filterMovie(movieStr: string): void {
    if (movieStr === '') {
      this.fetchMovies();
    } else {
      const afterFilter = this.movies$.value.filter((m) =>
        m.title.toLowerCase().includes(movieStr.toLowerCase())
      );
      this.movies$.next(afterFilter);
    }
  }

  sortByOption(option: string): void {
    if (option === 'no sort') {
      this.fetchMovies();
    } else {
      const sortedMovies = Array.from(this.movies$.value);
      sortedMovies.sort((a: any, b: any) => {
        if (a[option] < b[option]) {
          return -1;
        } else if (a[option] > b[option]) {
          return 1;
        } else {
          return 0;
        }
      });
      this.movies$.next(sortedMovies);
    }
  }
}
