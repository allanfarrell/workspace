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
    { id: '1', Instrument: '1234567', Applicants: 'Bob', Additional: '01/01/2023'},
    { id: '2', Instrument: '1234567', Applicants: 'Roger', Additional: '01/02/2023'},
  ];
  searchHeaders = [ 'Instrument', 'Applicants', 'Additional' ];

  rowClick(row: any) {
    this.router.navigate(['/instrument/summary']);
  }
}
