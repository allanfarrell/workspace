import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mm-search',
  templateUrl: './mm-search.component.html',
  styleUrls: ['./mm-search.component.scss']
})
export class MmSearchComponent {
  constructor(private router: Router) {}
  searchResults = [
    { id: '1', Entity: 'Address1', Description: '', Type: 'Security', Additional: '01/01/2023'},
    { id: '2', Entity: 'Address2', Description: '', Type: 'Discharged', Additional: '01/02/2023'},
  ];
  searchHeaders = [ 'Entity', 'Description', 'Type', 'Additional' ];

  rowClick(row: any) {
    this.router.navigate(['/instrument/summary']);
  }
}
