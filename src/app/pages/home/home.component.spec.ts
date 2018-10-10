import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { IonicModule, NavController } from 'ionic-angular';

import { MoviesComponent } from '../movies/movies.component';
import { AppComponent } from '../../app.component';
import { MovieService } from '../../shared/services/movie.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../../shared/services/config.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, MoviesComponent ],
      imports: [ IonicModule, HttpClientModule ],
      providers: [ NavController, MovieService, ConfigService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
