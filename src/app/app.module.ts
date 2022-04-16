import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { TransformBoxOfficePipe } from './transform-box-office.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MoviesComponent, MovieCardComponent, MovieListItemComponent, TransformBoxOfficePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
