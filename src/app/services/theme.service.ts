import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme$ = new BehaviorSubject('Light');

  constructor() {
    const localStorageTheme = localStorage.getItem('themeMode');

    if (localStorageTheme === 'Dark' || localStorageTheme === 'Light') {
      this.setTheme(localStorageTheme);
    } else {
      this.setTheme('Light');
    }
  }

  public toggleTheme(): void {
    const curVal = this.theme$.value;

    if (curVal === 'Light') {
      this.setTheme('Dark');
    } else {
      this.setTheme('Light');
    }
  }

  private setTheme(theme: 'Dark' | 'Light'): void {
    localStorage.setItem('themeMode', theme);
    this.theme$.next(theme);
  }
}
