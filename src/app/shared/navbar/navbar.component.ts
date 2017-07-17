import { Component, EventEmitter, Output, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'cp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {

  @Output() outTerm = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  search(term){
    this.outTerm.emit({search: term});
  }

}