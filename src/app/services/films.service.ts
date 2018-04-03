import { Injectable } from '@angular/core';
import { FILMS } from '../mocks/films';

@Injectable()
export class FilmsService {
  constructor() { }
  getFilms(){
    return FILMS
  }
}
