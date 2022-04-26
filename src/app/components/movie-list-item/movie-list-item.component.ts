import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { DelMovieModalComponent } from '../del-movie-modal/del-movie-modal.component';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent {
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

  onFavoriteClick() {
    this.moviesService.updateMovie(this.movie);
  }
}
