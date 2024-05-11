import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-communication',
  templateUrl: './inst-communication.component.html',
  styleUrls: ['./inst-communication.component.scss']
})
export class InstCommunicationComponent {
  data = [
    { id: '1', Description: 'TBC', Type: 'SMS', Direction: 'Received', User: 'System', Created: '01/01/2023' },
    { id: '2', Description: 'TBC', Type: 'Email', Direction: 'Sent', User: 'Bob', Created: '01/01/2022' }
  ];
  headers = [ 'Description', 'Type', 'User', 'Created' ];
}