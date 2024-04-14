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
          { name: 'Summary', route: 'tbc' },
          { name: 'Associations', route: 'tbc' },
          { name: 'Accounts', route: 'tbc' },
          { name: 'Securities', route: 'tbc' },
          { name: 'Notes', route: 'tbc' },
          { name: 'Events', route: 'tbc' },
        ]
      }
    ]
  }
}
