import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  data = [
    { id: '1', type: 'Standard', name: 'Account1' },
    { id: '2', type: 'Offset', name: 'Account2' },
    { id: '3', type: 'Offset', name: 'Account3' },
  ];
  headers = [ 'id', 'type', 'name' ];
}
