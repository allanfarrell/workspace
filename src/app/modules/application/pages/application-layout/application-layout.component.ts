import { Component } from '@angular/core';

@Component({
  selector: 'app-application-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.scss']
})
export class ApplicationLayoutComponent {
  menu = [
    { group: 'Application', name: 'Dashboard', route: '/app/dashboard' },
    { group: 'Application', name: 'Notifications', route: '/app/notifications' },
    { group: 'Application', name: 'Settings', route: '/app/settings' }
  ];
}
