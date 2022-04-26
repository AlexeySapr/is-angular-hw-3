import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent implements OnInit, OnDestroy {
  public favoriteMovies: Movie[] = [];
  private movieSubscr?: Subscription;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieSubscr = this.movieService.favoriteMovies$.subscribe((val) => {
      this.favoriteMovies = val;
    });
  }

  ngOnDestroy(): void {
    if (this.movieSubscr) {
      this.movieSubscr.unsubscribe();
    }
  }
}
