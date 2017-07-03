import {
  Component,
  HostBinding,
  OnInit,
  OnDestroy,
  Inject
 } from '@angular/core';
 
import { ActivatedRoute, Router } from '@angular/router';

import {DOCUMENT} from '@angular/platform-browser';
import {PageScrollInstance, PageScrollService, EasingLogic} from 'ng2-page-scroll';

import { Subscription } from 'rxjs/Subscription';
import { SessionStorageRef } from '../shared/SessionStorageRef';
import { AuthService } from '../auth.service';
import { HomeService } from './home.service';

import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  itens: any[] = [];
  sessionStorage: any;  
  subscriptions: Subscription[] = [];
  constructor(
    @Inject(DOCUMENT) private document: any,
    private pageScrollService: PageScrollService,
    private authService: AuthService,
    private ss: SessionStorageRef,
    protected route: ActivatedRoute,    
    private service: HomeService
  ) {
    this.listProdutcs();    
  }
  ngOnInit() {
    this.authService.isToken();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  goToScroll(scroll) {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `${ scroll }`);
    this.pageScrollService.start(pageScrollInstance);
  }
  listProdutcs(){
    this.subscriptions.push(
      this.route.data
        .subscribe(data => {
          this.itens = data['fetchData']['itens'];
          this.goToScroll('#galeria');
        })
    );
  }
  search(term){      
    this.listProdutcs();  
    if(term.search !== 'todos'){
      this.itens =
        this.itens 
          .filter( itens => {          
            const exp = new RegExp(term.search,'ig');
            this.goToScroll('#galeria');
            return itens.categoria.match(exp);
          });        
    }
  }
}
