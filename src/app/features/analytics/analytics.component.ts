import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  menu = {
    groups: [
      {
        name: 'Reports',
        items: [
          { name: 'Report1', route: 'tbc' },
          { name: 'Report 2', route: 'tbc' },
        ]
      }
    ]
  }
}