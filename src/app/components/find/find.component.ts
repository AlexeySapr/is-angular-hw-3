import { Component } from '@angular/core';
import { FindService } from 'src/app/services/find.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent {
  public inputText = '';

  constructor(public findService: FindService) {}

  handleChange(event: any) {
    this.inputText = event;

    if (event === '') {
      this.findService.filterMovie(this.inputText);
    }
  }

  onFindClick() {
    this.findService.filterMovie(this.inputText);
  }
}
