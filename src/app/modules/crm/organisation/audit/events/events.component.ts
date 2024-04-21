import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  headers = [ 'Type', 'Description', 'Updated'];
  data = [
    { Id: 1, Type: 'EventType1', Description: 'Update Rate', Updated: '01/01/2023' },
    { Id: 2, Type: 'EventType2', Description: 'Notification', Updated: '01/01/2023' },
  ];
}
