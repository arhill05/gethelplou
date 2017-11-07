import { Component, OnInit } from '@angular/core';

import { DataHttpService } from '../dataHttp.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
  organizations: Array<Organization>;
  firstOrganization;
  title = 'app';
  startingCoords = {
    lat: 38.228732,
    lng: -85.714771
  };
  constructor(private _dataHttpService: DataHttpService) { }

  ngOnInit() {
    this._dataHttpService.getData().subscribe(res => {
      console.log(res);
      if (res.length) {
        res.forEach(org => {
          org.lat = Number(org.lat);
          org.lng = Number(org.lng);
        });
        this.organizations = res;
      }
    });
  }

}
