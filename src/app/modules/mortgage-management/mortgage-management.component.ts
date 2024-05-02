import { Component } from '@angular/core';

@Component({
  selector: 'app-mortgage-management',
  templateUrl: './mortgage-management.component.html',
  styleUrls: ['./mortgage-management.component.scss']
})
export class MortgageManagementComponent {
  menu = [
    { group: 'Mortgage Management', name: 'Search', route: '/mgr/search' },
    { group: 'Mortgage Management', name: 'Obligor', route: '/mgr/obligor' },
    { group: 'Mortgage Management', name: 'Security', route: '/mgr/security' },
    { group: 'Processes', name: 'Rate Change', route: '/mgr/ratechange' },
    { group: 'Processes', name: 'Card Transaction Processing', route: '/mgr/ratechange' },
    { group: 'Processes', name: 'Bank Transfer Processing', route: '/mgr/ratechange' },
    { group: 'Processes', name: 'Funds Transfers', route: '/mgr/transfers' },
    { group: 'Processes', name: 'Printing', route: '/mgr/printing' },
    { group: 'Processes', name: 'Notifications', route: '/mgr/notifications' },
    { group: 'Reporting', name: 'Transactions', route: '/mgr/transactions' },
  ];
}