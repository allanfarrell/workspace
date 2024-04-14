import { Component } from '@angular/core';

@Component({
  selector: 'app-obligors',
  templateUrl: './obligors.component.html',
  styleUrls: ['./obligors.component.scss']
})
export class ObligorsComponent {
  headers = [ 'Id', 'FirstName', 'LastName', 'Created'];
  data = [
    { Id: 1, FirstName: 'Bob', LastName: 'Willis', Created: '01/01/2023' },
    { Id: 2, FirstName: 'Alice', LastName: 'Smurfette', Created: '01/01/2023' },
  ];
}
