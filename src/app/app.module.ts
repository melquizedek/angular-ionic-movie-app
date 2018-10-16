import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';

import { MovieService } from './shared/services/movie.service';
import { ConfigService } from './shared/services/config.service';
import { MovieViewComponent } from './pages/movie-view/movie-view.component';
import { PageRatingComponent } from './pages/page-rating/page-rating.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';


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
    Ionic2RatingModule
  ],
  declarations: [ 
    AppComponent, 
    MoviesComponent, 
    MovieViewComponent,
    PageRatingComponent,
    FileUploadComponent,
    SearchMovieComponent
  ],
  entryComponents: [ 
    AppComponent, 
    MoviesComponent,
    MovieViewComponent,
    PageRatingComponent,
    FileUploadComponent,
    SearchMovieComponent
  ],
  providers: [
    ConfigService,
    MovieService
  ],
  bootstrap: [ IonicApp ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }