import {Component, OnInit} from '@angular/core';

import {DataHttpService} from '../dataHttp.service';
import {ActivatedRoute} from '@angular/router/';
import 'rxjs/add/operator/mergeMap';

@Component({selector: 'app-organizations', templateUrl: './organizations.component.html', styleUrls: ['./organizations.component.scss']})
export class OrganizationsComponent implements OnInit {
  organizations : Organization[];
  searchTerms : string[];
  firstOrganization;
  title = 'app';
  startingCoords = {
    lat: 38.228732,
    lng: -85.714771
  };
  constructor(private _dataHttpService : DataHttpService, private route : ActivatedRoute) {}

  ngOnInit() {
    this
      .route
      .params
      .flatMap(params => {
        this.searchTerms = params['searchTerms'] ? JSON.parse(params['searchTerms']) : null;
        return this
          ._dataHttpService
          .getData();
      })
      .subscribe(res => {
        console.log(res);
        if (res.length) {
          res.forEach(org => {
            org.lat = Number(org.lat);
            org.lng = Number(org.lng);
          });
          this.organizations = this.filterBySearchTerm(res);
        }
      });
  }

  filterBySearchTerm = (organizations: Organization[]): Organization[] => {
    let result: Organization[] = [];

    //
    if(!this.searchTerms || !this.searchTerms.length) return organizations;

    // only return the organizations that the search terms indicate
    this.searchTerms.forEach(term => {
      organizations.forEach(organization => {
        if(organization[term] && !(result.indexOf(organization) > -1))
          result.push(organization);
      })
    })

    return result;
  }

}
