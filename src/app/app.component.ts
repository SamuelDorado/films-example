import { Observable } from 'rxjs/Observable';
import { FilmsService } from './services/films.service';
import { Component } from '@angular/core';
import { Film } from './models/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  films$: Observable<Film[]>
  //films = [];
  //subscription: Subscription;
  constructor(private filmsService: FilmsService){}

  ngOnInit(){
   this.films$ = this.filmsService.getFilms();
  }

 /* old school, remember to change the | async on the html
  ngOnInit(){
   this.subscription = this.filmsService.getFilms().subscribe((films)=>{
     this.films = films
   });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }*/
}
