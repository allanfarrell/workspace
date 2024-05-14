import { Component } from '@angular/core';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent {
  menu = [
    { group: 'Tenant', name: 'Details', route: '/config/detail' },
    { group: 'Tenant', name: 'Brand', route: '/config/brand' },
    { group: 'Tenant', name: 'Reference', route: '/config/reference' },
    { group: 'Tenant', name: 'Associates', route: '/config/associate' },
    { group: 'Access', name: 'Users', route: '/config/user' },
    { group: 'Access', name: 'Roles', route: '/config/role' },
    { group: 'Access', name: 'Tokens', route: '/config/token' },
    { group: 'Integration', name: 'Email', route: '/config/email' },
    { group: 'Integration', name: 'SMS', route: '/config/sms' }
  ];
}
