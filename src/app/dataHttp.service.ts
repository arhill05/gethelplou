///<reference path="../typings.d.ts" />
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataHttpService {

  result: any;

  constructor(private _http: Http) { }

  getData = (): Observable<Array<Organization>> => {
    return this._http.get('/api/data').map(result => <Array<Organization>>result.json());
  }

}
