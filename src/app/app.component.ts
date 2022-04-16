import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'is-angular-hw-3';
  themeMode: string | null = localStorage.getItem('themeMode') || 'Dark';

  setDarkTheme(): boolean {
    return this.themeMode === 'Light';
  }
}
