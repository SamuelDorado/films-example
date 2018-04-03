import { FilmsService } from './services/films.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
