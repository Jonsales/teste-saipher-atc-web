import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app.routing';
import { MenuComponent } from './_shared/_components/menu/menu.component';
import { NavBarComponent } from './_shared/_components/nav-bar/nav-bar.component';
import { FooterComponent } from './_shared/_components/footer/footer.component';
import { ScrollTopComponent } from './_shared/_components/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
