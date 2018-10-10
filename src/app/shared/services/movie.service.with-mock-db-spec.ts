import { TestBed, inject, tick } from '@angular/core/testing';
import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { MovieService } from './movie.service';
import { ConfigService } from './config.service';

fdescribe('MovieService', () => {

  let movieService: MovieService;
  let backend: MockBackend;

  beforeEach(() => {
    
      TestBed.configureTestingModule({
        imports: [
          JsonpModule
        ],
        providers: [
            MovieService,
            ConfigService,
            MockBackend,
            BaseRequestOptions,
            {
                provide: Jsonp,
                useFactory: (backend, options) => new Jsonp(backend, options),
                deps: [ MockBackend, BaseRequestOptions ]
            },
            {
              provide: Http,
              useFactory: (backend, options) => new Http(backend, options),
              deps: [ MockBackend, BaseRequestOptions ]
            }
        ]
      });

      backend = TestBed.get(MockBackend);
      movieService = TestBed.get(MovieService);

  });

  // it('should be created', inject([MovieService], (service: MovieService) => {
  //     expect(service).toBeTruthy();
  // }));

  // it('MovieService should have getMovie function', inject([MovieService], (movieService: MovieService) => {
  //     expect(movieService.getMovie).toBeTruthy();
  // }));

  it('MovieService getMovie function should return movie/movies', inject([MovieService], (movieService: MovieService) => {
      
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

     backend.connections.subscribe( connection => {
          connection.mockRespond( new Response(<ResponseOptions> { 
                body: JSON.stringify(fakeResponse)
          }) );
     });
      
     movieService.getMovie("Hero", "5", "2017", "movie");
     movieService.movies$.subscribe((reps: any) => {
          console.log(reps);
     });
     tick();
     
  }));

});