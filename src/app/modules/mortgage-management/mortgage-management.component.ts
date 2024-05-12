import { Component } from '@angular/core';

@Component({
  selector: 'app-mortgage-management',
  templateUrl: './mortgage-management.component.html',
  styleUrls: ['./mortgage-management.component.scss']
})
export class MortgageManagementComponent {
  menu = [
    { group: 'Mortgage Management', name: 'Search', route: '/manage/search' },
    { group: 'Configuration', name: 'Products', route: '/manage/product' },
    { group: 'Configuration', name: 'Funders', route: '/manage/obligor' },
    { group: 'Schedule', name: 'Transactions', route: '/shd/transactions' },
    { group: 'Schedule', name: 'Communication', route: '/shd/communication' },
    { group: 'Report', name: 'Transactions', route: '/manage/transactions' },
    { group: 'Report', name: 'Exposure', route: '/manage/exposure' },
    { group: 'Operations', name: 'Rate Change', route: '/manage/ratechange' },
    { group: 'Operations', name: 'Notifications', route: '/manage/notifications' },
    { group: 'Operations', name: 'Card Transaction Processing', route: '/manage/ratechange' },
    { group: 'Operations', name: 'Bank Transfer Processing', route: '/manage/ratechange' },
    { group: 'Operations', name: 'Funds Transfers', route: '/manage/transfers' },
  ];
}