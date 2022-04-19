import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { TransformBoxOfficePipe } from './pipes/transform-box-office.pipe';
import { FindComponent } from './components/find/find.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
