import { Component } from '@angular/core';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent {
  menu = [
    { group: 'Configuration', name: 'Details', route: '/org/details' },
    { group: 'Access', name: 'Users', route: '/org/users' },
    { group: 'Access', name: 'Roles', route: '/org/roles' },
    { group: 'Configuration', name: 'Reference Data', route: '/org/reference' },
    { group: 'Configuration', name: 'Email', route: '/org/integration/email' },
    { group: 'Configuration', name: 'SMS', route: '/org/integration/sms' },
  ];
  menu2 = {
    groups: [
      {
        name: 'Configuration',
        items: [
          { name: 'Details', route: '/org/details' },
          { name: 'Users', route: '/org/users' },
          { name: 'Roles', route: '/org/roles' },
          { name: 'Reference Data', route: '/org/reference' },
          { name: 'Integration', route: '/org/integration' },
        ]
      },
      {
        name: 'Entities',
        items: [
          { name: 'Funders', route: '/entities/funders' },
          { name: 'Obligors', route: '/entities/obligors' },
          { name: 'Products', route: '/entities/products' },
        ]
      },
      {
        name: 'Audit',
        items: [
          { name: 'Communication', route: 'org/communication' },
          { name: 'Events', route: 'org/events' },
        ]
      },
    ]
  };
}
