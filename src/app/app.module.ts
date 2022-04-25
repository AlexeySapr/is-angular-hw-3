import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { TransformBoxOfficePipe } from './pipes/transform-box-office.pipe';
import { FindComponent } from './components/find/find.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DelMovieModalComponent } from './components/del-movie-modal/del-movie-modal.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieListItemComponent,
    TransformBoxOfficePipe,
    FindComponent,
    MoviesPageComponent,
    FormPageComponent,
    DelMovieModalComponent,
    FavoritePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
