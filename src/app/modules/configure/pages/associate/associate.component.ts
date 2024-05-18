import { Component } from '@angular/core';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.scss']
})
export class AssociateComponent {
  headers = [ 'Id', 'Name', 'Type', 'EffectiveFrom', 'EffectiveTo'];
  data = [
    { Id: '1', Name: 'Liberty', Type: 'Funder', EffectiveFrom: '01/01/2023', EffectiveTo: '' },
    { Id: '2', Name: 'SailsForce', Type: 'Broker', EffectiveFrom: '01/01/2023', EffectiveTo: '' },
    { Id: '3', Name: 'MortgageCompany', Type: 'Mortgage Manager', EffectiveFrom: '01/01/2023', EffectiveTo: '' },
  ];
}
