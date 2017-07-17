import { 
  Component, 
  OnInit, 
  Input,
  Output } from '@angular/core';
import { ApiUrl } from './../../constants';

@Component({
  selector: 'cp-carousel-column',
  templateUrl: './carousel-column.component.html',
  styleUrls: [ './carousel-column.component.scss' ]
})
export class CarouselColumnComponent implements OnInit {

  @Input() collection;
  @Input() title;

  url = `${ ApiUrl }`;

  constructor() { }

  ngOnInit() {}

}