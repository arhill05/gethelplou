import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

enum SearchTerm {
  Assessments = 'assessmentOffered',
  Detox = 'medicalDetoxOffered',
  Residential = 'residentialOffered',
  Outpatient = 'outpatientOffered',
}

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {

  constructor(private router : Router) {}

  ngOnInit() {}

  onSearchClick = (term : SearchTerm) => {
    const searchTerms = [term]
    this
      .router
      .navigate([
        'organizations', {
          searchTerms: JSON.stringify(searchTerms)
        }
      ])
  }

}
