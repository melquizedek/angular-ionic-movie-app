import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../../shared/services/movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies:any = null;

  constructor(public navCtrl: NavController,
    public movieService: MovieService) {

  }

  ionViewDidLoad() {
    
  }

  getItems(ev: any) {
    const val = ev.target.value;
    console.log(val);
  }
  
}
