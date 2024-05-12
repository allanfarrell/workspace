import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-event',
  templateUrl: './inst-event.component.html',
  styleUrls: ['./inst-event.component.scss']
})
export class InstEventComponent {
  data = [
    { id: '1', user: 'System', description: 'Attribute SMSF removed.', timestamp: '01/01/2023' },
    { id: '2', user: 'System', description: 'Email sent to test@user.com.', timestamp: '01/01/2023' },
    { id: '3', user: 'System', description: 'Rate increased.', timestamp: '01/01/2023' }
  ];
  headers = [ 'user', 'description', 'timestamp' ];
}
