import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  // {path: '**', pathMatch: 'full', redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
