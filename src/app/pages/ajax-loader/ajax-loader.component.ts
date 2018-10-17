import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpLoaderService } from '../../shared/services/http-loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ajax-loader',
  templateUrl: './ajax-loader.component.html',
  styleUrls: ['./ajax-loader.component.scss']
})
export class AjaxLoaderComponent implements OnInit, OnDestroy {

  isAjaxStart: boolean = false;
  httpLoaderServiceSub: Subscription;

  constructor(private httpLoaderService: HttpLoaderService) { 
  }

  ngOnInit() {

          this.httpLoaderServiceSub = this.httpLoaderService
                                          .isAjaxStart
                                          .subscribe((resp:boolean) => {
                                              console.log('isAjaxStart', resp);
                                              this.isAjaxStart = resp;
                                          });
  }

  ngOnDestroy() {
          this.httpLoaderServiceSub.unsubscribe();
  }
}
