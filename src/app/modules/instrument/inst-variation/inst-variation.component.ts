import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-variation',
  templateUrl: './inst-variation.component.html',
  styleUrls: ['./inst-variation.component.scss']
})
export class InstVariationComponent {
  variation = [
    { id: '1', Name: 'Personal #3204', Number: '3204', BSB: '123-123', Type: 'Standard', Balance: '0'},
    { id: '1', Name: 'Personal #3205', Number: '3205', BSB: '123-123', Type: 'Offset', Balance: '1'}
  ];
  varHeaders = [ 'Name', 'Number', 'BSB', 'Balance' ];
}
