import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  public form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      title: new FormControl(''),
      fileImage: new FormControl(''),
      date: new FormControl(''),
      boxOffice: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('form: ', this.form.value);
    this.form.reset();
  }
}
