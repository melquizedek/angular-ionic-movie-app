import { Component } from '@angular/core';
import { MoviesComponent } from './pages/movies/movies.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  moviePage: any;
  uploadPage: any;
  loginPage: any;

  constructor() {
    this.moviePage = MoviesComponent;
    this.uploadPage = FileUploadComponent;
    this.loginPage = SignInComponent;
  }

}
