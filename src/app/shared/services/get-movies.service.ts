import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(
    private http: HttpClient
  ) { }
  getPopularMovies(): any {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=a2a5fab09814fa8ba22db4c2e9dbaa09&language=en-US&page=1');
  }
}

