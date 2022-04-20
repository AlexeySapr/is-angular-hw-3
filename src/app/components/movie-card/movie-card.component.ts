import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { DelMovieModalComponent } from '../del-movie-modal/del-movie-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input('movieItem') movie?: Movie;
  @Input() isDarkTheme?: boolean;

  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

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
