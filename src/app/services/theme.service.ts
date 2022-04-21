import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme$ = new BehaviorSubject('Light');
  public view$ = new BehaviorSubject('List');

  constructor() {
    //Theme mode
    const localStorageTheme = localStorage.getItem('themeMode');

    if (localStorageTheme === 'Dark' || localStorageTheme === 'Light') {
      this.setTheme(localStorageTheme);
    } else {
      this.setTheme('Light');
    }

    //View mode
    const localStorageView = localStorage.getItem('viewMode');

    if (localStorageView === 'Grid' || localStorageView === 'List') {
      this.setView(localStorageView);
    } else {
      this.setView('List');
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

  public toggleView(): void {
    const curVal = this.view$.value;

    if (curVal === 'List') {
      this.setView('Grid');
    } else {
      this.setView('List');
    }
  }

  private setTheme(theme: 'Dark' | 'Light'): void {
    localStorage.setItem('themeMode', theme);

    if (theme === 'Dark') {
      document.documentElement.style.setProperty('--theme-bg-color', '#001e3c');
    } else {
      document.documentElement.style.setProperty('--theme-bg-color', '#e0e1e2');
    }

    this.theme$.next(theme);
  }

  private setView(view: 'List' | 'Grid'): void {
    localStorage.setItem('viewMode', view);
    this.view$.next(view);
  }
}
