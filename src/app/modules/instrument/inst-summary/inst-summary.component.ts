import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inst-summary',
  templateUrl: './inst-summary.component.html',
  styleUrls: ['./inst-summary.component.scss']
})
export class InstSummaryComponent {
  constructor(private router: Router){}
  accounts = [
    { id: '1', Name: 'Personal #3204', Number: '3204', BSB: '123-123', Type: 'Standard', Balance: '0'},
    { id: '1', Name: 'Personal #3205', Number: '3205', BSB: '123-123', Type: 'Offset', Balance: '1'}
  ];
  accHeaders = [ 'Name', 'Number', 'BSB', 'Balance' ];
  obligors = [
    { id: '1', Name: 'Obligor1', Type: 'Borrower', Created: '01/01/2023'},
    { id: '2', Name: 'Obligor2', Type: 'Gaurantor', Created: '01/02/2023'},
  ];
  oblHeaders = [ 'Name', 'Type', 'Created' ];
  secirities = [
    { id: '1', Address: 'Address1', Status: 'Security', Created: '01/01/2023'},
    { id: '2', Address: 'Address2', Status: 'Discharged', Created: '01/02/2023'},
  ];
  secHeaders = [ 'Address', 'Status', 'Created' ];

  accountClicked(account: any){
    this.router.navigate(['/instrument/account']);
  }
}
