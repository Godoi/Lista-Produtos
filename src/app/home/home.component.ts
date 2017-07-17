import {
  Component,
  HostBinding,
  OnInit,
  OnDestroy,
  Input,
  Inject
 } from '@angular/core'; 
import { 
  ActivatedRoute, 
  Router } from '@angular/router';
import {DOCUMENT} from '@angular/platform-browser';
import {
  PageScrollInstance, 
  PageScrollService, 
  EasingLogic} from 'ng2-page-scroll';
import { Subscription } from 'rxjs/Subscription';
import { HomeService } from './home.service';
import { ApiUrl } from '../shared/constants';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  title:string = "Lançamentos";
  itens: any[] = [];
  carousel: any[] = [];
  sessionStorage: any;  
  subscriptions: Subscription[] = [];
  url = `${ ApiUrl }`;
  col:number = 3;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private pageScrollService: PageScrollService,
    protected route: ActivatedRoute,    
    private service: HomeService
  ) {    
    this.listReleases();
  }
  ngOnInit() { }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  goToScroll(scroll) {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `${ scroll }`);
    this.pageScrollService.start(pageScrollInstance);
  }
  listReleases(){
    this.route.data
        .subscribe(data => {          
          for(var i=0; i<data['fetchData']['itens'].length/this.col; i++){
            this.carousel.push(data['fetchData']['itens'].slice(i*this.col,(i*this.col)+this.col));
          } 
          this.itens = this.carousel; 
    });
  }
  listProdutcs(){   
    this.route.data
      .subscribe(data => {
        this.itens = data['fetchData']['itens'];
        this.goToScroll('#galeria');           
      });   
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
