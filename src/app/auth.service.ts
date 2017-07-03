import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionStorageRef } from './shared/SessionStorageRef';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { ApiUrl } from './shared/constants';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  apiUrl = `${ ApiUrl }login`;
  isLoggedIn = false;
  localStorage: any;
  sessionStorage: any;
  redirectUrl: string;
  loggedStream: Observable<boolean>;
  private logged = new Subject<boolean>();
  private header = new Headers(
    {
      'Content-Type': 'application/json'
    }
  );
  private helper = new JwtHelper();

  constructor(private router: Router,
    private ss: SessionStorageRef,
    private http: Http,
    private authHttp: AuthHttp) {
    this.sessionStorage = this.ss.nativeWindow();
    //this.loggedStream = this.logged.asObservable();
  }

  isToken(){
    const jwt =  '1aaa468de99390e432ed7d2542aabf43a03c46ca';
    this.sessionStorage.setItem('token', jwt);
  }

  private handleError(error: any): Promise<any> {
    //this.notify.error('');
    console.warn('Ocorreu um erro no service de autenticação', error);
    return Promise.reject(error.message || error);
  }
}
