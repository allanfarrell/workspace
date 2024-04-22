import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  headers = [ 'Code', 'Name', 'Created'];
  data = [
    { Code: 'PR1', Name: 'Product1', Created: '01/01/2023' },
    { Code: 'PR2', Name: 'Product2', Created: '01/01/2023' },
  ];
}
