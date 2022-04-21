import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent {
  public inputText: string = '';

  constructor(private findService: MoviesService) {}

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
