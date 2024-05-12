import { Component } from '@angular/core';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent {
  menu = [
    { group: 'Account', name: 'Dashboard', route: '/account/dashboard' },
    { group: 'Account', name: 'Notifications', route: '/account/notifications' },
    { group: 'Account', name: 'Settings', route: '/account/settings' }
  ];
}
