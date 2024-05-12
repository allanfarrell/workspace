import { Component } from '@angular/core';

@Component({
  selector: 'app-mortgage-management',
  templateUrl: './mortgage-management.component.html',
  styleUrls: ['./mortgage-management.component.scss']
})
export class MortgageManagementComponent {
  menu = [
    { group: 'Mortgage Management', name: 'Search', route: '/fim/search' },
    { group: 'Configuration', name: 'Products', route: '/fim/product' },
    { group: 'Configuration', name: 'Funders', route: '/fim/obligor' },
    { group: 'Schedule', name: 'Transactions', route: '/shd/transactions' },
    { group: 'Schedule', name: 'Communication', route: '/shd/communication' },
    { group: 'Report', name: 'Transactions', route: '/fim/transactions' },
    { group: 'Report', name: 'Exposure', route: '/fim/exposure' },
    { group: 'Operations', name: 'Rate Change', route: '/fim/ratechange' },
    { group: 'Operations', name: 'Notifications', route: '/fim/notifications' },
    { group: 'Operations', name: 'Card Transaction Processing', route: '/fim/ratechange' },
    { group: 'Operations', name: 'Bank Transfer Processing', route: '/fim/ratechange' },
    { group: 'Operations', name: 'Funds Transfers', route: '/fim/transfers' },
  ];
}