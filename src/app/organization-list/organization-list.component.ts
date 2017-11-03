import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {
  @Input() organizations: Organization[];
  constructor() { }

  ngOnInit() {
  }
}
