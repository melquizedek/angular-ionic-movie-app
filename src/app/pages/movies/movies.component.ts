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
		totalResults: number = 0;
		constructor(public navCtrl: NavController, 
			public navParams: NavParams,
			private movieService: MovieService,
			private CONFIG: ConfigService) { 
		}

		ngOnInit() {
					this.initTialMovieListSubcrip = 
							this.movieService.getMovie('black', '1', '', '')
							.subscribe((resp: any) => {
										if (resp.Response === "True") {
											this.movies = resp.Search.sort((a, b) => {
														return b.Year - a.Year	
												});
												console.log('movies.component - resp.totalResults ', resp.totalResults);
											this.totalResults = resp.totalResults;
										}
							});
		}

		ionViewLoaded() {
		}

		doSearchMovie(movies: any) {
			this.movies = movies;
		}
	  
		selectedMovie(imdbId: any) {
		  this.navCtrl.push(MovieViewComponent, {imdbId: imdbId});
		}
	  
		ngOnDestroy() {
		  this.initTialMovieListSubcrip.unsubscribe();
		  this.movieResultListSubscrip.unsubscribe();
		}

}
