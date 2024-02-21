import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: UpcomingComponent },
  { path: 'actions', component: UpcomingComponent },
  { path: 'offers', component: UpcomingComponent },
  { path: 'more', component: UpcomingComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
