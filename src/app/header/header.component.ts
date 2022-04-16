import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themeMode: string | null = localStorage.getItem('themeMode') || 'Light';

  constructor() {}

  ngOnInit(): void {}

  setTheme(): void {
    if (this.themeMode === 'Light') {
      localStorage.setItem('themeMode', 'Dark');
      this.themeMode = 'Dark';
    } else {
      localStorage.setItem('themeMode', 'Light');
      this.themeMode = 'Light';
    }
  }
}
