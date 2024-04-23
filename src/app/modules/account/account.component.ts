import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  menu = [
          { group: 'Account', name: 'Dashboard', route: '/account/dashboard' },
          { group: 'Account', name: 'Notifications', route: '/account/notifications' },
          { group: 'Account', name: 'Settings', route: '/account/settings' }
        ];
}
