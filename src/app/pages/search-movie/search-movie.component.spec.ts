import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, 
  NavController, 
  NavParams } from 'ionic-angular/index';
import { SearchMovieComponent } from './search-movie.component';
import { MovieService } from '../../shared/services/movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigService } from '../../shared/services/config.service';

describe('SearchMovieComponent', () => {
  let component: SearchMovieComponent;
  let fixture: ComponentFixture<SearchMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMovieComponent ],
      imports: [ IonicModule.forRoot(SearchMovieComponent) ],
      providers: [
          MovieService,
          HttpClient,
          HttpHandler,
          ConfigService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
