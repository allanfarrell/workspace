import { Component } from '@angular/core';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent {
  menu = {
    groups: [
      {
        name: 'Instrument',
        items: [
          { name: 'Summary', route: '/instrument/summary' },
          { name: 'Associations', route: '/instrument/associations' },
          { name: 'Accounts', route: '/instrument/accounts' },
          { name: 'Securities', route: '/instrument/securities' },
          { name: 'Notes', route: '/instrument/notes' },
          { name: 'Events', route: '/instrument/events' },
        ]
      }
    ]
  }
}
