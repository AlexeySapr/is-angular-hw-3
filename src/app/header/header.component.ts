import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themeMode?: string = localStorage.getItem('themeMode') || 'Light';
  viewMode?: string = localStorage.getItem('viewMode') || 'Grid';
  isThemeDark?: boolean;

  @Output() onThemeChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.isThemeDark = this.themeMode === 'Dark';
  }

  setViewMode(): void {
    if (this.viewMode === 'Grid') {
      localStorage.setItem('viewMode', 'List');
      this.viewMode = 'List';
    } else {
      localStorage.setItem('viewMode', 'Grid');
      this.viewMode = 'Grid';
    }
  }

  setTheme(): void {
    if (this.themeMode === 'Light') {
      localStorage.setItem('themeMode', 'Dark');
      this.themeMode = 'Dark';
      this.isThemeDark = true;
    } else {
      localStorage.setItem('themeMode', 'Light');
      this.themeMode = 'Light';
      this.isThemeDark = false;
    }
    this.onThemeChange.emit(this.themeMode);
  }
}
