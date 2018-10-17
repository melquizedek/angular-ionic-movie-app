import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpLoaderService } from './http-loader.service';
import 'rxjs/operators/map';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpConfServiceService implements HttpInterceptor {

      constructor(
          private httpLoaderService: HttpLoaderService
      ) { }

      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          // const modified = req.clone({setHeaders: {'Custom-Header-1': '1'}});
          
          this.httpLoaderService.isAjaxStart.next(true);

          return next.handle(req).pipe(
              tap(event => {
                  console.log(event);
              }, error => {
                  console.log('HTTP Error: ', error);
              }, complete => {
                console.log(complete);
                this.httpLoaderService.isAjaxStart.next(false);
              })
          );

      }

}