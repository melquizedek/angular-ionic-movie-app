import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigService } from '../../shared/services/config.service';
import { Subscription } from 'rxjs/Subscription';
import { MovieService } from '../../shared/services/movie.service';
import { MovieViewComponent } from '../movie-view/movie-view.component';

@IonicPage()
@Component({
  selector: 'movie-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnDestroy {

		movies: any = null;
		initTialMovieListSubcrip: Subscription;
		movieResultListSubscrip: Subscription;

		constructor(public navCtrl: NavController, 
			public navParams: NavParams,
			private movieService: MovieService,
			private CONFIG: ConfigService) { 

			this.initTialMovieListSubcrip = this.movieService.getMovie('earth', '10', '', '')
						.subscribe((resp: any) => {
									this.movies = resp.Search.sort((a, b) => {
												return b.Year - a.Year
										});
						});
		}

		searchMovie(ev: any) {
			let keyword = (ev.target.value) ? ev.target.value : "earth";
			if (keyword) {
			  this.movieService.getMovie(keyword, '10', '', '');
			}
			this.movieResultListSubscrip = this.movieService.movies$.subscribe((resp: any) => {
				this.movies = null;
				if (resp.Response === "True") {
					this.movies = resp.Search.sort((a, b) => {
									  return b.Year - a.Year;
								  });
				}
			});
		}
	  
		selectedMovie(imdbId: any) {
		  this.navCtrl.push(MovieViewComponent, {imdbId: imdbId});
		}
	  
		ngOnDestroy() {
		  this.initTialMovieListSubcrip.unsubscribe();
		  this.movieResultListSubscrip.unsubscribe();
		}

}
