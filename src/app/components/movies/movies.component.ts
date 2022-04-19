import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { FindService } from 'src/app/services/find.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies?: Movie[];
  private movieSubscr?: Subscription;

  public themeMode?: string;
  private themeSubscr?: Subscription;

  public viewMode?: string;
  private viewSubscr?: Subscription;

  constructor(
    private themeService: ThemeService,
    private findService: FindService
  ) {}

  ngOnInit(): void {
    this.themeSubscr = this.themeService.theme$.subscribe((value) => {
      this.themeMode = value;
    });

    this.viewSubscr = this.themeService.view$.subscribe((value) => {
      this.viewMode = value;
    });

    this.movieSubscr = this.findService.filteredMovies$.subscribe((value) => {
      this.movies = value;
    });
  }

  ngOnDestroy(): void {
    if (this.themeSubscr) {
      this.themeSubscr.unsubscribe();
    }

    if (this.viewSubscr) {
      this.viewSubscr.unsubscribe();
    }

    if (this.movieSubscr) {
      this.movieSubscr.unsubscribe();
    }
  }
}
