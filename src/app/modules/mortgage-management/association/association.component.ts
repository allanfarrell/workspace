import { Component } from '@angular/core';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent {
  data = [
    { id: '1', type: 'Borrower', name: 'Borrower1' },
    { id: '2', type: 'Garrantor', name: 'Garrantor1' },
    { id: '3', type: 'Funder', name: 'Funder1' },
  ];
  headers = [ 'id', 'type', 'name' ];
}
