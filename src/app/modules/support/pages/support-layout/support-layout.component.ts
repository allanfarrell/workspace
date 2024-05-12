import { Component } from '@angular/core';

@Component({
  selector: 'app-support-layout',
  templateUrl: './support-layout.component.html',
  styleUrls: ['./support-layout.component.scss']
})
export class SupportLayoutComponent {
  menu = [
    { group: 'Support', name: 'Request', route: '/support/request' },
    { group: 'Support', name: 'Guides', route: '/support/guides' },
    { group: 'Support', name: 'Release', route: '/support/release' }
  ];
}
