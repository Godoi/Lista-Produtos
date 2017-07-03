import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import { ApiUrl,ApiUrlMock } from '../shared/constants';
import { Products } from '../shared/models/products';
import { Observable }  from 'rxjs/Observable';
import { AuthService } from '../auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
    protected endpoint = `${ ApiUrl }`;
    protected endPointMock = `${ ApiUrlMock }`;
    constructor(
      protected http: Http,
      protected authHttp: AuthHttp) { }

  listProducts(): Promise<any> {
    return this.authHttp
      .get(this.endpoint)
      .toPromise()
      .then( response => response.json().data as Products)
      .catch(err => console.warn('Erro - HomeService.listProducts', err));
  }

  listMockProducts(): Promise<any> {
    return this.http
      .get(this.endPointMock)
      .toPromise()
      .then( response => response.json() as Products)
      .catch(err => console.warn('Erro - HomeService.listMockProducts', err));    
  }

}