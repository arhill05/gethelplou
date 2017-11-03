import { Component } from '@angular/core';

import { DataHttpService } from './dataHttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: Array<any>;
  title = 'app';

  constructor(private _dataHttpService: DataHttpService) {
    this._dataHttpService.getData().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
