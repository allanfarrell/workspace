import { Component } from '@angular/core';

@Component({
  selector: 'app-mortgage-management',
  templateUrl: './mortgage-management.component.html',
  styleUrls: ['./mortgage-management.component.scss']
})
export class MortgageManagementComponent {
  menu = [
    { group: 'Mortgage Management', name: 'Search', route: '/mgr/search' },
    { group: 'Mortgage Management', name: 'Summary', route: '/mgr/summary' },
    { group: 'Mortgage Management', name: 'Association', route: '/mgr/association' },
    { group: 'Mortgage Management', name: 'Event', route: '/mgr/event' },
    { group: 'Mortgage Management', name: 'Note', route: '/mgr/note' },
    { group: 'Mortgage Management', name: 'Obligor', route: '/mgr/obligor' },
    { group: 'Mortgage Management', name: 'Security', route: '/mgr/security' }
  ];
}
