import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'is-angular-hw-3';
  isThemeDark?: boolean;

  ngOnInit(): void {
    this.isThemeDark = localStorage.getItem('themeMode') === 'Dark';
  }

  changeTheme(): void {
    this.isThemeDark = !this.isThemeDark;
  }
}
