import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  @Output() searchMovie: EventEmitter<any> = new EventEmitter();
  movies: any = null;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  doSearchMovie(ev?: any) {
    let keyword = (ev.target.value) ? ev.target.value : "earth";
    this.movieService.getMovie(keyword, '10', '', '')
        .subscribe((resp: any) => {
            this.movies = null;
            if (resp.Response === "True") {
              this.movies = resp.Search.sort((a, b) => {
                        return b.Year - a.Year;
                      });
            }
            this.searchMovie.emit(this.movies);
        });
  }
  
}
