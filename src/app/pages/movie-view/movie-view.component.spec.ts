import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieViewComponent } from './movie-view.component';
import { IonicModule, NavController, NavParams, Config, App, Platform, DomController } from 'ionic-angular';
import { PageRatingComponent } from '../page-rating/page-rating.component';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ConfigService } from '../../shared/services/config.service';
import { MovieService } from '../../shared/services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

export const firebaseConf = {
  apiKey: "AIzaSyC_MZY9iMpZTVQfPJS8nJY8xsWiMUL2PW0",
  authDomain: "movie-app-directory.firebaseapp.com",
  databaseURL: "https://movie-app-directory.firebaseio.com",
  projectId: "movie-app-directory",
  storageBucket: "movie-app-directory.appspot.com",
  messagingSenderId: "350925860108"
};

describe('MovieViewComponent', () => {
  let component: MovieViewComponent;
  let fixture: ComponentFixture<MovieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieViewComponent, PageRatingComponent ],
      imports: [ IonicModule, Ionic2RatingModule, HttpClientModule, AngularFireModule.initializeApp(firebaseConf) ],
      providers: [ 
          AngularFireDatabase,
          NavController,
          ConfigService,
          MovieService,
          { 
            provide: NavParams, 
            useClass : NavParamsMock
          }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
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