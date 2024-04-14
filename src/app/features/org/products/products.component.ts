import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  tableHeaders: string[] = ['ID', 'Name', 'Value'];
  tableData: any[] = [
    { ID: 1, Name: 'Product 1', Value: '1%' },
    { ID: 2, Name: 'Product 2', Value: '2%' },
    { ID: 3, Name: 'Product 3', Value: '3%' }
  ];
}
