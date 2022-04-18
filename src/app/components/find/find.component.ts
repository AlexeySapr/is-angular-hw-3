import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent implements OnInit {
  public inputText = '';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('event: ', this.inputText);
  }
}
