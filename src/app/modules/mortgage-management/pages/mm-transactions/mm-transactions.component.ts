import { Component } from '@angular/core';

@Component({
  selector: 'app-mm-transactions',
  templateUrl: './mm-transactions.component.html',
  styleUrls: ['./mm-transactions.component.scss']
})
export class MmTransactionsComponent {
  data = [
    { id: '1', Account: '1234', Value: 'True' },
    { id: '2', Account: '4321', Value: 'False' }
  ];
  headers = [ 'Account', 'Value' ];
}
