import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FindService } from 'src/app/services/find.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent implements OnInit, OnDestroy {
  public inputText: string = '';

  public themeMode?: string;
  private themeSubscr?: Subscription;

  constructor(
    private findService: FindService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeSubscr = this.themeService.theme$.subscribe((value) => {
      this.themeMode = value;
    });
  }

  handleChange(event: any) {
    this.inputText = event;

    if (event === '') {
      this.findService.filterMovie(this.inputText);
    }
  }

  onFindClick() {
    this.findService.filterMovie(this.inputText);
  }

  ngOnDestroy(): void {
    if (this.themeSubscr) {
      this.themeSubscr.unsubscribe();
    }
  }
}
