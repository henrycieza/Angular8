import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {
    path: '',
    component:AppComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
