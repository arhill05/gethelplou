import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getData = (): any => {
    return this._http.get('/api/data').map(result =>
      this.result = result.json()
    );
  }

}
