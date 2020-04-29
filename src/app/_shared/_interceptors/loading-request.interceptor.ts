import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { NgxUiLoaderService, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({providedIn: "root"})
export class LoadingRequestInterceptor implements HttpInterceptor {
  constructor(private ngxLoader: NgxUiLoaderService, private _router: Router) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

      this.ngxLoader.start();
      
      return next.handle(req).pipe(finalize(() => this.ngxLoader.stop()));
  }
}

export var loaderConfig : NgxUiLoaderConfig = 
{
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "rgba(72,108,202,0.93)",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "square-jelly-box",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}