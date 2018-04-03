import { FilmsService } from './services/films.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  films = []
  constructor(private filmsService: FilmsService){}

  ngOnInit(){
    this.films = this.filmsService.getFilms()
  }
}
