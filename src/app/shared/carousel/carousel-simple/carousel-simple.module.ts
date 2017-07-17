import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselSimpleComponent } from './carousel-simple.component';

@NgModule({
  declarations: [ CarouselSimpleComponent ],
  imports: [ CommonModule ],
  exports: [ CarouselSimpleComponent ]
})
export class CarouselSimpleModule {}