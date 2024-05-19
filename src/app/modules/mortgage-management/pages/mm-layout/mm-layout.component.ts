import { Component } from '@angular/core';

@Component({
  selector: 'app-mm-layout',
  templateUrl: './mm-layout.component.html',
  styleUrls: ['./mm-layout.component.scss']
})
export class MmLayoutComponent {
  menu = [
    { group: 'Management', name: 'Search', route: '/manage/search' },
    { group: 'Configuration', name: 'Products', route: '/manage/product' },
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
