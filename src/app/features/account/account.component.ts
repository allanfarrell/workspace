import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  menu = {
    groups: [
      {
        name: 'Account',
        items: [
          { name: 'Dashboard', route: '/org/dashboard' },
          { name: 'Settings', route: '/org/settings' },
          { name: 'Notifications', route: '/account/notifications' },
        ]
      },
      {
        name: 'Group2',
        items: []
      }
    ]
  }
}
