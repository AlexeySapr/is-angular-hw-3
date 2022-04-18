import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public viewMode?: string = localStorage.getItem('viewMode') || 'Grid';
  public themeMode?: string;
  private subscription?: Subscription;

  @Output() onViewChange = new EventEmitter<string>();

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.subscription = this.themeService.theme$.subscribe((value) => {
      this.themeMode = value;
    });
  }

  setViewMode(): void {
    if (this.viewMode === 'Grid') {
      localStorage.setItem('viewMode', 'List');
      this.viewMode = 'List';
    } else {
      localStorage.setItem('viewMode', 'Grid');
      this.viewMode = 'Grid';
    }
    this.onViewChange.emit(this.viewMode);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
