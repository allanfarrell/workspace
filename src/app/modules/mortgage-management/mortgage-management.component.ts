import { Component } from '@angular/core';

@Component({
  selector: 'app-mortgage-management',
  templateUrl: './mortgage-management.component.html',
  styleUrls: ['./mortgage-management.component.scss']
})
export class MortgageManagementComponent {
  menu = [
    { group: 'Mortgage Management', name: 'Search', route: '/mgr/search' },
    { group: 'Configuration', name: 'Products', route: '/mgr/product' },
    { group: 'Configuration', name: 'Funders', route: '/mgr/obligor' },
    { group: 'Analytics', name: 'Transactions', route: '/mgr/transactions' },
    { group: 'Analytics', name: 'Exposure', route: '/mgr/exposure' },
    { group: 'Operations', name: 'Rate Change', route: '/mgr/ratechange' },
    { group: 'Operations', name: 'Notifications', route: '/mgr/notifications' },
    { group: 'Operations', name: 'Card Transaction Processing', route: '/mgr/ratechange' },
    { group: 'Operations', name: 'Bank Transfer Processing', route: '/mgr/ratechange' },
    { group: 'Operations', name: 'Funds Transfers', route: '/mgr/transfers' },
  ];
}