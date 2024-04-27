import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-summary',
  templateUrl: './inst-summary.component.html',
  styleUrls: ['./inst-summary.component.scss']
})
export class InstSummaryComponent {
  accounts = [
    { id: '1', AccountNumber: '1234', Balance: '0'}
  ];
  accHeaders = [ 'AccountNumber', 'Balance' ];
  obligors = [
    { id: '1', Name: 'Obligor1', Type: 'Borrower', Created: '01/01/2023'},
    { id: '1', Name: 'Obligor2', Type: 'Gaurantor', Created: '01/02/2023'},
  ];
  oblHeaders = [ 'Name', 'Type', 'Created' ];
}
