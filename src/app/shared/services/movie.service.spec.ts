import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from "./movie.service";
import { ConfigService } from "./config.service";

describe('MovieService', () => {

    let movieService: MovieService;
    let httpMock: HttpTestingController;
    let CONFIG: ConfigService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ 
                MovieService, 
                ConfigService
            ]
        })

        movieService = TestBed.get(MovieService);
        httpMock = TestBed.get(HttpTestingController);
        CONFIG = TestBed.get(ConfigService);
    })

    afterEach(() => {
        httpMock.verify();
    });

    it('should return movie/s from API GET', () => {

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

        movieService.getMovie('hero', '10', '2017', 'movie').subscribe(resp => {
            expect(resp.Search.length).toBeGreaterThan(0);
            expect(resp.Search[1].imdbID).toEqual("tt6491170");
        });

        const request = httpMock.expectOne(CONFIG.API_HOST + '&s=hero&page=10&y=2017&plot=full');
        expect(request.request.method).toBe('GET');
        request.flush(fakeResponse);
    });



});