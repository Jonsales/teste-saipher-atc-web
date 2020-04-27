import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfigService } from './_shared/_services/base/config.service';
import { Config } from './_shared/_models/base/config';
import { ToastrModule } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
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
    //NgxUiLoaderModule.forRoot(loaderConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right",
      progressBar: true
    }), // ToastrModule added
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
