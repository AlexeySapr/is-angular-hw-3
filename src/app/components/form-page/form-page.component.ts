import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { UUID } from 'angular2-uuid';
import { Movie } from 'src/app/models/movie';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent {
  public form: FormGroup;

  /*file upload*/
  public url: any;
  // public msg = '';

  selectFile(event: any) {
    // if (!event.target.files[0] || event.target.files[0].length == 0) {
    //   this.msg = 'You must select an image';
    //   return;
    // }

    // var mimeType = event.target.files[0].type;

    // if (mimeType.match(/image\/*/) == null) {
    //   this.msg = 'Only images are supported';
    //   return;
    // }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      // this.msg = '';
      this.url = reader.result;
    };
  }
  /************************* */

  constructor(
    private moviesService: MoviesService,
    private location: Location
  ) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      fileImage: new FormControl(null),
      date: new FormControl(null, Validators.required),
      boxOffice: new FormControl(null, Validators.min(0)),
      actors: new FormArray([]),
    });
  }

  get actorsFormArray() {
    return this.form.get('actors') as FormArray;
  }

  addControl() {
    this.actorsFormArray.push(new FormControl(null, Validators.required));
  }

  removeControl(index: number) {
    this.actorsFormArray.removeAt(index);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    const val = this.form.value;
    console.log('this.form: ', this.form.controls);

    const newMovie: Movie = {
      id: UUID.UUID(),
      title: val.title,
      poster_path: this.url || 'assets/images/emtyFilm.jpg',
      release_date: val.date,
      box_office: val.boxOffice,
      add_date: new Date(),
      actors: val.actors,
    };

    this.moviesService.addMovie(newMovie);
    this.form.reset();
    this.goBack();
  }
}
