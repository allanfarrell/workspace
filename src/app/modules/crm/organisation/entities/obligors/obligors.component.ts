import { Component } from '@angular/core';

@Component({
  selector: 'app-obligors',
  templateUrl: './obligors.component.html',
  styleUrls: ['./obligors.component.scss']
})
export class ObligorsComponent {
  headers = [ 'Code', 'Name', 'Created'];
  data = [
    { Code: 'OB1', Name: 'Obligor1', Created: '01/01/2023' },
    { Code: 'OB2', Name: 'Obligor2', Created: '01/01/2023' },
  ];
}
