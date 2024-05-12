import { Component } from '@angular/core';

@Component({
  selector: 'app-ref-data',
  templateUrl: './ref-data.component.html',
  styleUrls: ['./ref-data.component.scss']
})
export class RefDataComponent {
  tableHeaders: string[] = ['ID', 'Key', 'Value', 'EffectiveFrom', 'EffectiveTo'];
  tableData: any[] = [
    { ID: 1, Key: 'State', Value: 'NSW', EffectiveFrom: '01/01/2023', EffectiveTo: '01/02/2023' },
    { ID: 2, Key: 'State', Value: 'ACT', EffectiveFrom: '01/01/2023', EffectiveTo: '01/02/2023' },
    { ID: 3, Key: 'State', Value: 'NT', EffectiveFrom: '01/01/2023', EffectiveTo: '' }
  ];
}
