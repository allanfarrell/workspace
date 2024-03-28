import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  notifications = [
    { id: "1", recieved: "01/01/2020 00:00:00", type: "notification", status:"unread", message: "to notify you" },
    { id: "2", recieved: "01/01/2020 00:00:00", type: "system", status:"unread", message: "to notify you" }
  ]
}
