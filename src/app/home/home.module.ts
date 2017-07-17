import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormsModule } from '@angular/forms';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { 
  CarouselSimpleModule, 
  CarouselColumnModule } from '../shared/carousel/';
import { BannerColumnModule } from '../shared/banner/';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    CarouselSimpleModule,
    CarouselColumnModule,
    BannerColumnModule,
    //Routing
    HomeRoutingModule
  ],
  providers: [HomeService]
})
export class HomeModule {}