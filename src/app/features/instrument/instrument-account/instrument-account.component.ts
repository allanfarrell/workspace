import { Component } from '@angular/core';

@Component({
  selector: 'app-instrument-account',
  templateUrl: './instrument-account.component.html',
  styleUrls: ['./instrument-account.component.scss']
})
export class InstrumentAccountComponent {
  data = [
    { id: '1', type: 'Standard', name: 'Account1' },
    { id: '2', type: 'Offset', name: 'Account2' },
    { id: '3', type: 'Offset', name: 'Account3' },
  ];
  headers = [ 'id', 'type', 'name' ];
}
