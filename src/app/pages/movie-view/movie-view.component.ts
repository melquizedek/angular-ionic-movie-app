import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';
import { ConfigService } from '../../shared/services/config.service';
import { MovieService } from '../../shared/services/movie.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';

@IonicPage()
@Component({
  selector: 'movie-view',
  templateUrl: './movie-view.component.html',	
  styleUrls: ['./movie-view.component.scss']
})

export class MovieViewComponent implements OnDestroy {

		imdbId: any;

		// getMovieByIdSubscript: Subscription;
		// getCommentsSubscript: Subscription;

		Poster:string;
		Title:string;
		Plot:string;
		Ratings:string;
		Released:string;
		Genre:string;
		Director:string;
		Language:string;
		Actors:string;

		rate:number = 0;

		commentsRef:AngularFireList<any>;
		comments:any;

		isAddComment:boolean = false;
		comment = new FormControl('');

		constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		private CONFIG: ConfigService,
		private movieService: MovieService,
		private Angfirebase: AngularFireDatabase) { 
				this.imdbId = this.navParams.get('imdbId');
				this.commentsRef = this.Angfirebase.list( '/Comments', 
								ref =>
									ref.orderByChild('imdbId').equalTo(this.imdbId) 
							);
		}

		ionViewDidLoad() {
      
			this.movieService.getMovieById(this.imdbId)
				.subscribe((resp: any) => {
				  this.Poster = resp.Poster;
				  this.Title = resp.Title;
				  this.Plot = resp.Plot;
				  this.Ratings = resp.Ratings;
				  //console.log("from movie-view page Ratings = ", resp.Ratings);
				  this.Released = resp.Released;
				  this.Genre = resp.Genre;
				  this.Director = resp.Director;
				  this.Language = resp.Language;
				  this.Actors = resp.Actors;
				});
			
				console.log('imdbId => ', this.imdbId);
				
				 
				this.commentsRef.valueChanges()
						.subscribe(resp => {
							this.comments = resp.sort(function(a, b) {
								return b.date - a.date; 
							});
						});
		}
	  
		addComment() {
		  this.commentsRef.push({
			userId: 'currentUser123',
			imdbId: this.imdbId,
			comment: this.comment.value,
			date:Date.now()
		  });
		}
	  
		ngOnDestroy() {
		  // this.getMovieByIdSubscript.unsubscribe();
		  // this.getCommentsSubscript.unsubscribe();
		}
}
