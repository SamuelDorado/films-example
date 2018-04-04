import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() { }

  authenticate(user: string,password: string){
    const hasAccess = ((user === 'user') && (password === 'user'))
    if (hasAccess){
      sessionStorage.setItem('access_token', 'wahdawiuhdawuhi');
    }
    return Observable.of(hasAccess)
  }

  isAuthenticated(){
    return !!(sessionStorage.getItem('access_token'))
  }
}
