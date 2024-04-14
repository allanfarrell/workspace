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
        name: 'Instrument',
        items: [
          { name: 'Details', route: '/org/details' },
          { name: 'Users', route: '/org/users' },
          { name: 'Integration', route: '/org/integration' },
          { name: 'Reference Data', route: '/org/data' },
          { name: 'Events', route: '/org/events' }
        ]
      },
      {
        name: 'Group2',
        items: []
      }
    ]
  }
}