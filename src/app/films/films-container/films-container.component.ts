import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Film } from '../../models/film';
import { FilmsService } from '../services/films.service';


@Component({
  selector: 'app-films-container',
  templateUrl: './films-container.component.html',
  styleUrls: ['./films-container.component.css']
})
export class FilmsContainerComponent implements OnInit {
  films$: Observable<Film[]>
  constructor(private filmsService: FilmsService){}

  ngOnInit(){
   this.films$ = this.filmsService.getFilms();
  }
}
