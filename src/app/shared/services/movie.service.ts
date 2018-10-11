import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ConfigService } from './config.service';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieService {

  movies$: Observable<any>;
  movieObserver$: Observer<any>;

  getMovieById$: Observable<any>;
  getMovieByIdObserver$: Observer<any>;

  constructor(public http: HttpClient, 
        private CONFIG: ConfigService) {
  }

  // FOR UNIT TEST PURPOSES, MAKE THE ENDPOINT SAME IN THE SPEC FILE.
//   getMovie(search: string, page: string, year?: string, type?: string) {
//       this.movies$ = Observable.create((ob: Observer<any>) => {
//           this.movieObserver$ = ob;
          
//           let API_URL = this.CONFIG.API_HOST;
          
//           if (search.length) API_URL += '&s=' + search;
//           if (page.length) API_URL += '&page=' + page; 
//           if (year.length) API_URL += '&y=' + year;
          
//           API_URL += '&type=' + (type.length) ? type : 'movie';
//           API_URL += '&plot=full';

//           this.http.get("http://www.omdbapi.com/?apikey=4d1886d2&s=hero&page=10&y=2017&plot=full").subscribe((resp: any) => {
//             this.movieObserver$.next(resp);
//           });
//       });

//     }


    getMovie(search: string, page: string, year?: string, type?: string) : Observable<any> {
            
            let API_URL = this.CONFIG.API_HOST;
            
            if (search.length) API_URL += '&s=' + search;
            if (page.length) API_URL += '&page=' + page; 
            if (year.length) API_URL += '&y=' + year;
            
            API_URL += '&type=' + (type.length) ? type : 'movie';
            API_URL += '&plot=full';

            return this.http.get(API_URL);
    }


    getMovieById(imdbId: any) : Observable<any> {
        return Observable.create((ob: Observer<any>) => {
                this.getMovieByIdObserver$ = ob;
                this.http.get(this.CONFIG.API_HOST + '&i=' + imdbId + '&plot=full')
                          .subscribe((resp: any) => {
                              this.getMovieByIdObserver$.next(resp);
                          });
            });
    } 

}