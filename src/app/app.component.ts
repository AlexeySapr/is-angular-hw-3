import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'is-angular-hw-3';
  isThemeDark?: boolean;
  viewMode?: any;

  ngOnInit(): void {
    this.isThemeDark = localStorage.getItem('themeMode') === 'Dark';
    this.viewMode = localStorage.getItem('viewMode') || 'Grid';
  }

  changeViewMode(ev: string): void {
    this.viewMode = ev;
  }

  changeTheme(): void {
    this.isThemeDark = !this.isThemeDark;
  }
}
