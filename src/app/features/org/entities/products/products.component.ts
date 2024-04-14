import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  tableHeaders: string[] = ['Id', 'Name', 'Value'];
  tableData: any[] = [
    { Id: 1, Name: 'Product 1', Value: '1%' },
    { Id: 2, Name: 'Product 2', Value: '2%' },
    { Id: 3, Name: 'Product 3', Value: '3%' }
  ];
}
