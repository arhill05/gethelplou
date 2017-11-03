import { Component } from '@angular/core';

import { DataHttpService } from './dataHttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  organizations: Array<Organization>;
  firstOrganization;
  title = 'app';

  constructor(private _dataHttpService: DataHttpService) {
    this._dataHttpService.getData().subscribe((res) => {
      console.log(res);
      this.organizations = res;
      this.organizations.forEach(org => {
        org.lat = parseInt(<any>org.lat);
        org.lng = parseInt(<any>org.lng);
      });
      this.firstOrganization = this.organizations[0];
      console.log('firstOrganization: ', this.firstOrganization);
      console.log(typeof(this.firstOrganization.lat));
    });
  }
}
