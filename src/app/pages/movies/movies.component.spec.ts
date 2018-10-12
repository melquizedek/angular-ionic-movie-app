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
import { doesNotThrow } from 'assert';

fdescribe('MoviesComponent', () => {
  
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

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
      declarations: [ MoviesComponent ]
    }).compileComponents();
  }));  

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
  }));

  it(`should create`, async(() => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
  }));

  it(`should have movie title`, async(() => {
      fixture.detectChanges();
      const titleElems = fixture.debugElement.queryAll(By.css("ion-card-title"));
      expect(titleElems[0].nativeElement.innerHTML.trim()).toEqual("Taking Earth 2");
      expect(titleElems[1].nativeElement.innerHTML.trim()).toEqual("Fittest on Earth: A Decade of Fitness");
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