import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  headers = [ 'Message', 'Created', 'Read' ];
  data = [
    { Id: 1, Message: 'You have been notified about something.', Created: '01/01/2023', Read: '' },
    { Id: 2, Message: 'You have been notified about something.', Created: '01/01/2023',  Read: '02/01/2023' },
  ];
}
