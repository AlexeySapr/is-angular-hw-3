import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
// import { MoviesService } from 'src/app/services/movies.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  @Input() movies?: Movie[];

  public viewMode?: string;
  private viewSubscr?: Subscription;

  constructor(
    private themeService: ThemeService
  ) // public moviesService: MoviesService
  {}

  ngOnInit(): void {
    this.viewSubscr = this.themeService.view$.subscribe((value) => {
      this.viewMode = value;
    });
  }

  ngOnDestroy(): void {
    if (this.viewSubscr) {
      this.viewSubscr.unsubscribe();
    }
  }
}
