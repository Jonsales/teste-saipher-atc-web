import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { MenuModule } from '../_shared/_components/menu/menu.module';
import { NavBarComponent } from '../_shared/_components/nav-bar/nav-bar.component';
import { FooterComponent } from '../_shared/_components/footer/footer.component';
import { ScrollTopComponent } from '../_shared/_components/scroll-top/scroll-top.component';
import { FormDefaultModule } from '../_shared/_components/form-default/form-default.module';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    ScrollTopComponent
  ],
  imports: [
    HomeRouting,
    CommonModule,
    MenuModule
  ]
})
export class HomeModule { }
