import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesPageComponent },
  { path: 'add-movie', component: FormPageComponent },
  { path: 'favorites', component: FavoritePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
