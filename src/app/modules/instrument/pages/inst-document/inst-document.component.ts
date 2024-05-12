import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-document',
  templateUrl: './inst-document.component.html',
  styleUrls: ['./inst-document.component.scss']
})
export class InstDocumentComponent {
  data = [
    { id: '1', DocumentType: 'Contract', Name: 'contract', Description: 'description', Created: '01/01/2023', Size: '1kb' },
    { id: '2', DocumentType: 'Statement', Name: 'statement', Description: 'description', Created: '01/01/2022', Size: '1kb' }
  ];
  headers = [ 'Name', 'DocumentType', 'Description', 'Size' ];
}
