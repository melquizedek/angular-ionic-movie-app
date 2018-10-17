import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HttpLoaderService {

  isAjaxStart: Subject<any> = new Subject<any>();  

  constructor() { 
      
  }

}
