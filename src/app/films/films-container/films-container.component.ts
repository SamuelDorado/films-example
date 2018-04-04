import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Film } from '../../models/film';
import { FilmsService } from '../services/films.service';
import { OmdbResponse } from '../../models/omdbResponse';


@Component({
  selector: 'app-films-container',
  templateUrl: './films-container.component.html',
  styleUrls: ['./films-container.component.css']
})
export class FilmsContainerComponent implements OnInit {
  films$: Observable<OmdbResponse>
  search: string;
  constructor(private filmsService: FilmsService){}

  ngOnInit(){
  }

  searchFilm(){
    if(this.search.length > 0){
      this.films$ = this.filmsService.getFilms(this.search)
    }
  }

}
