import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { TransformBoxOfficePipe } from './pipes/transform-box-office.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieListItemComponent,
    TransformBoxOfficePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
