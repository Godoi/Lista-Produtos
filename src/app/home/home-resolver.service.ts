import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AuthService } from '../auth.service';
import { HomeService } from './home.service';
import { Products } from '../shared/models/products';

@Injectable()
export class HomeResolverService implements Resolve < Object > {

    constructor(
        private authService: AuthService,
        private service: HomeService
    ){ }

    resolverProductsList(): Promise < Products >{        
        return this.service.listProducts();
    }
    resolverMockProductsList(): Promise < Products >{        
        return this.service.listMockProducts();
    }

    resolve(route: ActivatedRouteSnapshot): Promise < Object > {
        let fetchData = {};
         return Promise.all([
             this.resolverMockProductsList().then( productsList =>{
                fetchData['itens'] = productsList;
             })
        ])
        .then( () => {    
            //console.log(fetchData);          
            return fetchData;
        });
    }
}