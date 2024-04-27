import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
  data = [
    { id: '1', number: '1', street: 'Somewhere street', suburb: 'North Sydney', postcode: '2000' }
  ];
  headers = [ 'number', 'street', 'suburb', 'postcode'];
}
