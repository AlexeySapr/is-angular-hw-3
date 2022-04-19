import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public themeMode?: string;
  public viewMode?: string;
  private themeSubscr?: Subscription;
  private viewSubscr?: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscr = this.themeService.theme$.subscribe((value) => {
      this.themeMode = value;
    });

    this.viewSubscr = this.themeService.view$.subscribe((value) => {
      this.viewMode = value;
    });
  }

  toggleViewMode(): void {
    this.themeService.toggleView();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngOnDestroy(): void {
    if (this.themeSubscr) {
      this.themeSubscr.unsubscribe();
    }

    if (this.viewSubscr) {
      this.viewSubscr.unsubscribe();
    }
  }
}
