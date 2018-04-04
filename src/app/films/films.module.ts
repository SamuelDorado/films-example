import { FilmsService } from './services/films.service';
import { FilmCardComponent } from './film-card/film-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsContainerComponent } from './films-container/films-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FilmsContainerComponent,
    FilmCardComponent
  ],
  providers:[FilmsService]
})
export class FilmsModule { }
