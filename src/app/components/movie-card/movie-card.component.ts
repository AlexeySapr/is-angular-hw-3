import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { DelMovieModalComponent } from '../del-movie-modal/del-movie-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input('movieItem') movie?: Movie;

  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal
  ) {}

  onDeleteClick(id: any) {
    const ref = this.modalService.open(DelMovieModalComponent);
    ref.result.then(
      (ok) => {
        this.moviesService.deleteMovie(id);
      },
      (cancel) => {
        console.log('cancel clicked');
      }
    );
  }
}
