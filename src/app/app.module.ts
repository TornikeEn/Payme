import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';

const COMPONENTS = [
  AppComponent,
  HomeComponent,
  UpcomingComponent,
  NavigationComponent,
  CardComponent,
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
