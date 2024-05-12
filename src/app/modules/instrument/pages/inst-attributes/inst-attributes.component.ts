import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-attributes',
  templateUrl: './inst-attributes.component.html',
  styleUrls: ['./inst-attributes.component.scss']
})
export class InstAttributesComponent {
  data = [
    { id: '1', Attribute: 'SMSF', Value: 'True', EffectiveFrom: '01/01/2023', User: 'System', EffectiveTo: '01/01/2023' },
    { id: '2', Attribute: 'VacantLand', Value: 'False', EffectiveFrom: '01/01/2023', User: 'Bob', EffectiveTo: '01/01/2022' }
  ];
  headers = [ 'Attribute', 'Value', 'User', 'EffectiveFrom', 'EffectiveTo' ];
}
