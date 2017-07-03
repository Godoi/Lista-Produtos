import { Component, EventEmitter, Output, OnInit, Input, HostBinding } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'cp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {

  @Output() outTerm = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  search(term){
    this.outTerm.emit({search: term});
  }

}