import { OmdbResponse } from './../../models/omdbResponse';
import { Injectable } from '@angular/core';;
import { Film } from '../../models/film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';


@Injectable()
export class FilmsService {
  constructor(private http: HttpClient) { }
  getFilms(search:string): Observable<OmdbResponse>{
   return this.http.get(`http://www.omdbapi.com/?apikey=bb0616f7&s=${search}`).debounceTime(1000) as Observable<OmdbResponse>
  }
}
