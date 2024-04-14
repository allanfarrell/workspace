import { Component } from '@angular/core';

@Component({
  selector: 'app-funders',
  templateUrl: './funders.component.html',
  styleUrls: ['./funders.component.scss']
})
export class FundersComponent {
  headers = [ 'Id', 'Name', 'Created', 'Updated'];
  data = [
    { Id: 1, Name: 'Funder', Updated: '01/01/2023' },
    { Id: 2, Name: 'Funder', Updated: '01/01/2023' },
  ];
}
