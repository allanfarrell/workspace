import { Component } from '@angular/core';

@Component({
  selector: 'app-system-admin',
  templateUrl: './system-admin.component.html',
  styleUrls: ['./system-admin.component.scss']
})
export class SystemAdminComponent {
  menu = [
    { group: 'System Admin', name: 'Tenants', route: '/sys/tenants' },
    { group: 'System Admin', name: 'Modules', route: '/sys/two' },
    { group: 'System Admin', name: 'Features', route: '/sys/three' },
    { group: 'System Admin', name: 'Users', route: '/sys/three' }
  ];
}
