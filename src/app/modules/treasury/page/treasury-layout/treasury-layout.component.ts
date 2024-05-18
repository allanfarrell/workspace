import { Component } from '@angular/core';

@Component({
  selector: 'app-treasury-layout',
  templateUrl: './treasury-layout.component.html',
  styleUrls: ['./treasury-layout.component.scss']
})
export class TreasuryLayoutComponent {
  menu = [
    { group: 'Treasury', name: 'Portfolio', route: '/treasury/portfolio' },
  ];
}
