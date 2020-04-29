import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfigService } from './_shared/_services/base/config.service';
import { Config } from './_shared/_models/base/config';
import { ToastrModule } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { loaderConfig, LoadingRequestInterceptor } from './_shared/_interceptors/loading-request.interceptor';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxUiLoaderModule } from "ngx-ui-loader";
registerLocaleData(localeBr, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(loaderConfig),
    ToastrModule.forRoot({
      positionClass: "toast-top-right",
      progressBar: true
    }),
  ],
  providers: [
    ConfigService,
    Config,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingRequestInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function loadConfig(config: ConfigService) {
  let conf = config.loadConfig();
  return () => conf;
}
