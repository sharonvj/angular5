import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {
 



  constructor(private http: HttpClient) { }

  doSignin (signin) {
    return this.http.post('/api/account/signin',signin)
  }

  doSignup(account){
    return this.http.post('/api/account/signup',account)
  }

}
