export class Movies {
  // what we want to call the results coming back within the app
  movie_id: number;
  title: string;
  overview: string;
  poster: string;


  constructor({
    id = 0,
    original_title = '',
    overview = '',
    poster_path = "",
    ...rest
  }) {
    this.movie_id = id;
    this.title = original_title;
    this.overview = overview;
    this.poster = poster_path;
  }
}
