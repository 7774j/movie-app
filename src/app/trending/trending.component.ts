import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movies } from '../shared/models/movie.model';
import { GetMoviesService } from '../shared/services/get-movies.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
private subs = new Subscription;
movies: []= []
  constructor(private router: Router, private movieHelper: GetMoviesService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }
 getPopularMovies(): void{
   this.subs.add(this.movieHelper.getPopularMovies().subscribe(
     (data) => {
       let output;
       if (data){
         output = data.results;
         this.movies = output.map((x: { [x: string]: any}) => new Movies(x));
       } else {
           this.movies = [];
         }
         }
   ));
 }
}
