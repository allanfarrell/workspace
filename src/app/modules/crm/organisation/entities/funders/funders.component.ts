import { Component } from '@angular/core';

@Component({
  selector: 'app-funders',
  templateUrl: './funders.component.html',
  styleUrls: ['./funders.component.scss']
})
export class FundersComponent {
  headers = [ 'Code', 'Name', 'Created'];
  data = [
    { Code: 'AX1', Name: 'Funder1', Created: '01/01/2023' },
    { Code: 'AX2', Name: 'Funder2', Created: '01/01/2023' },
  ];
}
