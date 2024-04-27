import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-event',
  templateUrl: './inst-event.component.html',
  styleUrls: ['./inst-event.component.scss']
})
export class InstEventComponent {
  data = [
    { id: '1', description: 'description description description', created: '01/01/2023' },
    { id: '2', description: 'description description description', created: '01/01/2023' },
    { id: '3', description: 'description description description', created: '01/01/2023' }
  ];
  headers = [ 'description', 'created' ];
}
