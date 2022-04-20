import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-del-movie-modal',
  templateUrl: './del-movie-modal.component.html',
  styleUrls: ['./del-movie-modal.component.scss'],
})
export class DelMovieModalComponent {
  constructor(public modal: NgbActiveModal) {}
}
