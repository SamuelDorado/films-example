import { Injectable } from '@angular/core';;
import { Film } from '../models/film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmsService {
  constructor(private http: HttpClient) { }
  getFilms(): Observable<Film[]>{
   return this.http.get('http://localhost:3000/films') as Observable<Film[]>
  }
}
