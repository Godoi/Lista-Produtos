import { Injectable } from '@angular/core';
import { 
	ActivatedRouteSnapshot, 
  Resolve } from '@angular/router';
import { HomeService } from './home.service';
import { Products } from '../shared/models/products';

@Injectable()
export class HomeResolverService implements Resolve < Object > {

	constructor(
			private service: HomeService
	){ }

	resolverProductsReleases(): Promise < Products >{        
			return this.service.getReleases();
	}
	resolve(route: ActivatedRouteSnapshot): Promise < Object > {
			let fetchData = {};
				return Promise.all([
						this.resolverProductsReleases().then( productsReleases =>{                 
							fetchData['itens'] = productsReleases;            
						})
			])
			.then( () => {    
					//console.log(fetchData);       
					return fetchData;
			});
	}
}