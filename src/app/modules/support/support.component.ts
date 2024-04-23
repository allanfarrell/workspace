import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  menu = [
    { group: 'Support', name: 'Request', route: '/support/request' },
    { group: 'Support', name: 'Guides', route: '/support/guides' },
    { group: 'Support', name: 'Release', route: '/support/release' }
  ];
}
