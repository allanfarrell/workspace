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
  ];
}