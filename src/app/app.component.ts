import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: Array<any>;
  title = 'app';

  constructor(private _dataService: DataService) {
    this._dataService.getData().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
