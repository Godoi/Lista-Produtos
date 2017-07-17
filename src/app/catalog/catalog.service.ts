import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ApiUrl } from '../shared/constants';
import { Products } from '../shared/models/products';
import { Observable }  from 'rxjs/Observable';
import { TokenByJaneteRosa } from '../shared/constants';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CatalogService {
  protected url:string;
  protected endpoint = `${ ApiUrl }`;
  protected token = `${ TokenByJaneteRosa }`;
  protected header = new Headers({ 'Authorization': 'Token ' + this.token });
  constructor(protected http: Http) { }
  
  getCatalog(): Promise<any> {    
    this.url = "/site/v2/product/list/1/";
    this.endpoint = `${this.endpoint}`+`${this.url}`;
    return this.http
      .get(this.endpoint,{headers: this.header})
      .toPromise()
      .then( response => {
        return response.json().response as Products;
      })
      .catch(err => console.warn('Erro - HomeService.listProducts', err));     
  }

}