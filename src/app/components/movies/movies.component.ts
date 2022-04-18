import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MOVIES } from 'src/app/constants/mock-movies';
import { Movie } from 'src/app/models/movie';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies: Movie[] = MOVIES;
  @Input('viewModeMovies') viewMode?: string;

  public themeMode?: string;
  private subscription?: Subscription;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.subscription = this.themeService.theme$.subscribe((value) => {
      this.themeMode = value;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
