import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies?: Movie[];
  private movieSubscr?: Subscription;

  public viewMode?: string;
  private viewSubscr?: Subscription;

  constructor(
    private themeService: ThemeService,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.viewSubscr = this.themeService.view$.subscribe((value) => {
      this.viewMode = value;
    });

    this.movieSubscr = this.moviesService.filteredMovies$.subscribe((value) => {
      this.movies = value;
    });
  }

  ngOnDestroy(): void {
    if (this.viewSubscr) {
      this.viewSubscr.unsubscribe();
    }

    if (this.movieSubscr) {
      this.movieSubscr.unsubscribe();
    }
  }
}
