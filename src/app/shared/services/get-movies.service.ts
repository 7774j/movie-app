import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
//@Output()movieWasSelected = new EventEmitter<Movies>();
//movies: Movies[];
  constructor(
    private http: HttpClient
  ) { }
  getPopularMovies(): any {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=a2a5fab09814fa8ba22db4c2e9dbaa09&language=en-US&page=1');
  }
 // onMovieSelected(movie: Movies) {
    //this.movieWasSelected.emit(movie);
  //}
}

