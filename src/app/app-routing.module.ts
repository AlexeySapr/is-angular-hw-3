import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './components/form-page/form-page.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies-page', pathMatch: 'full' },
  { path: 'movies-page', component: MoviesPageComponent },
  { path: 'add-movie', component: FormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
