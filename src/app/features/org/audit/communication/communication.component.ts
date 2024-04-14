import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent {
  headers = [ 'Id', 'Channel', 'Purpose', 'Updated'];
  data = [
    { Id: 1, Channel: 'Email', Purpose: 'RateRise', Updated: '01/01/2023' },
    { Id: 2, Channel: 'SMS', Purpose: 'Notification', Updated: '01/01/2023' },
  ];
}
