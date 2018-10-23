import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, AuthServiceConfig } from "angular5-social-login";
import { FacebookLoginProvider } from "angular5-social-login";
import { getAuthServiceConfigs } from "../environments/socialLoginConf";

import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';

import { MovieService } from './shared/services/movie.service';
import { ConfigService } from './shared/services/config.service';
import { MovieViewComponent } from './pages/movie-view/movie-view.component';
import { PageRatingComponent } from './pages/page-rating/page-rating.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';
import { HttpConfServiceService } from './shared/services/http-conf-service.service';
import { HttpLoaderService } from './shared/services/http-loader.service';
import { AjaxLoaderComponent } from './pages/ajax-loader/ajax-loader.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PaginationComponent } from './pages/pagination/pagination.component';


export const firebaseConf = {
  apiKey: "AIzaSyC_MZY9iMpZTVQfPJS8nJY8xsWiMUL2PW0",
  authDomain: "movie-app-directory.firebaseapp.com",
  databaseURL: "https://movie-app-directory.firebaseio.com",
  projectId: "movie-app-directory",
  storageBucket: "movie-app-directory.appspot.com",
  messagingSenderId: "350925860108"
};

@NgModule({
  imports: [ 
    BrowserModule, 
    IonicModule.forRoot(AppComponent),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConf),
    AngularFireDatabaseModule,
    Ionic2RatingModule,
    SocialLoginModule
  ],
  declarations: [ 
    AppComponent, 
    MoviesComponent, 
    MovieViewComponent,
    PageRatingComponent,
    FileUploadComponent,
    SearchMovieComponent,
    AjaxLoaderComponent,
    SignInComponent,
    PaginationComponent
  ],
  entryComponents: [ 
    AppComponent, 
    MoviesComponent,
    MovieViewComponent,
    PageRatingComponent,
    FileUploadComponent,
    SearchMovieComponent,
    AjaxLoaderComponent,
    SignInComponent,
    PaginationComponent
  ],
  providers: [
    ConfigService,
    MovieService,
    HttpLoaderService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpConfServiceService,
        multi: true
    },
    {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [ IonicApp ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }