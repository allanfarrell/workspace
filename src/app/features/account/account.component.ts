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
          { name: 'Dashboard', route: '/account/dashboard' },
          { name: 'Notifications', route: '/account/notifications' },
          { name: 'Settings', route: '/account/settings' },
        ]
      }
    ]
  }
}
