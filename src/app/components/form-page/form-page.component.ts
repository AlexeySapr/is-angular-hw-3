import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ThemeService } from 'src/app/services/theme.service';
import { UUID } from 'angular2-uuid';
import { Movie } from 'src/app/models/movie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  public themeMode?: string;
  private themeSubscr?: Subscription;

  constructor(
    private themeService: ThemeService,
    private moviesService: MoviesService,
    private location: Location
  ) {
    this.form = new FormGroup({
      title: new FormControl(''),
      fileImage: new FormControl(''),
      date: new FormControl(''),
      boxOffice: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.themeSubscr = this.themeService.theme$.subscribe((value) => {
      this.themeMode = value;
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    const val = this.form.value;
    const newMovie: Movie = {
      id: UUID.UUID(),
      title: val.title,
      poster_path:
        'https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      release_date: val.date,
      box_office: val.boxOffice,
      add_date: Date.now().toLocaleString(),
    };

    this.moviesService.addMovie(newMovie);
    this.form.reset();
    this.goBack();
  }

  ngOnDestroy(): void {
    if (this.themeSubscr) {
      this.themeSubscr.unsubscribe();
    }
  }
}
