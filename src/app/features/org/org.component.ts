import { Component } from '@angular/core';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss']
})
export class OrgComponent {
  menu = {
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
          { name: 'Products', route: '/entities/obligors' },
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
  }
}