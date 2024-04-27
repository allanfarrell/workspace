import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-account',
  templateUrl: './inst-account.component.html',
  styleUrls: ['./inst-account.component.scss']
})
export class InstAccountComponent {
  data = [
    { id: '1', AccountNumber: '2090902132', Balance: '3000' }
  ];
  headers = [ 'AccountNumber', 'Balance' ];
}
