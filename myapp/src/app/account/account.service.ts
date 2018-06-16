import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {
  private signinUrl = 'http://localhost:9200/account/_search';

  constructor(private http: HttpClient) { }

  doSignin (signin) {
    var query = {
		"query": {
		"bool": {
		  "must": [
		    { "match": { "user": signin.username } },
		    { "match": { "password": signin.password } }
		   ]
		  }
		 }
	}
    return this.http.post(this.signinUrl,query)
  }

}
