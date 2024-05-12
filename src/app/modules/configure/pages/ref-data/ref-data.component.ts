import { Component } from '@angular/core';

@Component({
  selector: 'app-ref-data',
  templateUrl: './ref-data.component.html',
  styleUrls: ['./ref-data.component.scss']
})
export class RefDataComponent {
  tableHeaders: string[] = ['ID', 'Key', 'Value', 'Type'];
  tableData: any[] = [
    { ID: 1, Key: 'State', Value: 'NSW', Type: 'Type1' },
    { ID: 2, Key: 'State', Value: 'ACT', Type: 'Type2' },
    { ID: 3, Key: 'State', Value: 'NT', Type: 'Type3' }
  ];
}
