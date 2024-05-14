import { Component } from '@angular/core';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.scss']
})
export class AssociateComponent {
  headers = [ 'Id', 'Name', 'Type', 'EffectiveFrom', 'EffectiveTo'];
  data = [
    { Id: '1', Name: 'Liberty', Type: 'Funder', EffectiveFrom: '01/01/2023', EffectiveTo: '' }
  ];
}
