import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { IonicModule, 
  NavController, 
  NavParams } from 'ionic-angular/index';
import { MovieService } from '../../shared/services/movie.service';
import { ConfigService } from '../../shared/services/config.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { SearchMovieComponent } from '../search-movie/search-movie.component';

fdescribe('MoviesComponent', () => {
  
  let moviesComponent: MoviesComponent;
  let moviesfixture: ComponentFixture<MoviesComponent>;

  let searchMovieComponent: SearchMovieComponent;
  let searchMovieFixture: ComponentFixture<SearchMovieComponent>;

  let titleElems: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(MoviesComponent)],
      providers: [
        NavController, 
        MovieService, 
        ConfigService,
        HttpClientTestingModule,
        HttpClient,
        HttpHandler,
        {provide: NavParams, useClass: NavParamsMock}],
      declarations: [ MoviesComponent, SearchMovieComponent ]
    }).compileComponents();
  }));  

  beforeEach(() => {
    
    moviesfixture = TestBed.createComponent(MoviesComponent);
    moviesComponent = moviesfixture.componentInstance;

    searchMovieFixture = TestBed.createComponent(SearchMovieComponent);
    searchMovieComponent = searchMovieFixture.componentInstance;

    moviesfixture.detectChanges();
    searchMovieFixture.detectChanges();

    titleElems = moviesfixture.debugElement.queryAll(By.css("ion-card-title"));
  });

  it(`should create`, async(() => {
    moviesfixture.detectChanges();
      expect(moviesComponent).toBeTruthy();
  }));

  it(`should have movie title`, async(() => {
      
    moviesfixture.detectChanges();
      
      let specTitles = [
          'Taking Earth',
          'Fittest on Earth: A Decade of Fitness'
      ];

      for (let elem in titleElems) {
        expect(titleElems[elem].nativeElement.innerHTML.trim()).toEqual(specTitles[elem]);
      }
      
  }));

  it('Should displayed list of movies with earth title', async(() => {
        moviesfixture.detectChanges();

        let params = {target: { value: 'Earth'}};
        searchMovieComponent.doSearchMovie(params);
        moviesComponent.movies = searchMovieComponent.movies;

        let specTitles = [
          'Taking Earth',
          'Fittest on Earth: A Decade of Fitness'
        ];

        for (let elem in titleElems) {
          expect(titleElems[elem].nativeElement.innerHTML.trim()).toEqual(specTitles[elem]);
        }
  }));

});

export class NavParamsMock {
  static returnParam = null;
  public get(key): any {
    if (NavParamsMock.returnParam) {
       return NavParamsMock.returnParam
    }
    return 'default';
  }
  static setParams(value){
    NavParamsMock.returnParam = value;
  }
}