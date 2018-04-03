import { Injectable } from '@angular/core';
import { FILMS } from '../mocks/films';
import { Film } from '../models/film';

@Injectable()
export class FilmsService {
  constructor() { }
  getFilms(): Film[]{
    return FILMS
  }
}
