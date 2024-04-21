import { Component } from '@angular/core';

@Component({
  selector: 'app-mortgage-management',
  templateUrl: './mortgage-management.component.html',
  styleUrls: ['./mortgage-management.component.scss']
})
export class MortgageManagementComponent {
  menu = {
    groups: [
      {
        name: 'Mortgage Management',
        items: [
          { name: 'Search', route: '/mgr/search' },
          { name: 'Summary', route: '/mgr/summary' },
          { name: 'Association', route: '/mgr/association' },
          { name: 'Event', route: '/mgr/event' },
          { name: 'Note', route: '/mgr/node' },
          { name: 'Obligor', route: '/mgr/obligor' },
          { name: 'Security', route: '/mgr/security' },
        ]
      },
    ]
  };
}
