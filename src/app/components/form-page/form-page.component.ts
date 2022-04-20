import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  /*file upload*/
  public url: any;
  public msg = '';

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }
  /************************* */

  constructor(
    private themeService: ThemeService,
    private moviesService: MoviesService,
    private location: Location
  ) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      fileImage: new FormControl(''),
      date: new FormControl('', Validators.required),
      boxOffice: new FormControl('', Validators.min(0)),
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
    console.log('this.url: ', this.url);

    if (!this.url) {
      this.url = 'assets/images/emtyFilm.jpg';
    }

    const newMovie: Movie = {
      id: UUID.UUID(),
      title: val.title,
      poster_path: this.url,
      release_date: val.date,
      box_office: val.boxOffice,
      add_date: new Date(),
      actors: [],
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
