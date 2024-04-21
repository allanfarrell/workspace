import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  menu = {
    groups: [
      {
        name: 'Support',
        items: [
          { name: 'Request', route: '/support/request' },
          { name: 'Guides', route: '/support/guides' },
          { name: 'Release', route: '/support/release' },
        ]
      }
    ]
  };
}
