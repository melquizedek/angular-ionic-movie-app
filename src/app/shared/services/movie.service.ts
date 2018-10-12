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

  // FOR SERVICE UNIT TEST, MAKE THE ENDPOINT SAME IN THE SPEC FILE.
//   getMovie(search: string, page: string, year?: string, type?: string) : Observable<any> {
      
          
//           let API_URL = this.CONFIG.API_HOST;
          
//           if (search.length) API_URL += '&s=' + search;
//           if (page.length) API_URL += '&page=' + page; 
//           if (year.length) API_URL += '&y=' + year;
          
//           API_URL += '&type=' + (type.length) ? type : 'movie';
//           API_URL += '&plot=full';

//           return this.http.get("http://www.omdbapi.com/?apikey=4d1886d2&s=hero&page=10&y=2017&plot=full");

//     }

  // FOR COMPONENT UNIT TEST, MAKE THE ENDPOINT SAME IN THE SPEC FILE.
    getMovie(search: string, page: string, year?: string, type?: string) : Observable<any> {
        let fakeResponse = {
            "Search":[
               {
                  "Title":"Taking Earth",
                  "Year":"2017",
                  "imdbID":"tt4290974",
                  "Type":"movie",
                  "Poster":"https://m.media-amazon.com/images/M/MV5BYjI3NjE0ZWQtMWNkOS00NjIwLTgzMGQtYTA5MTVjMjdlMjMyXkEyXkFqcGdeQXVyNTg1ODA1NjQ@._V1_SX300.jpg"
               },
               {
                  "Title":"Fittest on Earth: A Decade of Fitness",
                  "Year":"2017",
                  "imdbID":"tt6491170",
                  "Type":"movie",
                  "Poster":"https://m.media-amazon.com/images/M/MV5BZWQ1MjUxMGEtZWI1Zi00YmFkLWFlMGItYWU0NTk0ZTk4ZmY5L2ltYWdlXkEyXkFqcGdeQXVyNjMwMzkyNDM@._V1_SX300.jpg"
               }
            ],
            "totalResults":"1625",
            "Response":"True"
         };
        return Observable.create((ob: Observer<any>) => {
            ob.next(fakeResponse);
        })    
    }

    // getMovie(search: string, page: string, year?: string, type?: string) : Observable<any> {
            
    //         let API_URL = this.CONFIG.API_HOST;
            
    //         if (search.length) API_URL += '&s=' + search;
    //         if (page.length) API_URL += '&page=' + page; 
    //         if (year.length) API_URL += '&y=' + year;
            
    //         API_URL += '&type=' + (type.length) ? type : 'movie';
    //         API_URL += '&plot=full';

    //         return this.http.get(API_URL);
    // }


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