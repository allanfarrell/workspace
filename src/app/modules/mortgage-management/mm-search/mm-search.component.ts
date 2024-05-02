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
    { id: '1', Name: 'Address1', Type: 'Security', Additional: '01/01/2023'},
    { id: '2', Name: 'Address2', Type: 'Discharged', Additional: '01/02/2023'},
  ];
  searchHeaders = [ 'Name', 'Type', 'Additional' ];

  rowClick(row: any) {
    this.router.navigate(['/instrument/summary']);
  }
}
