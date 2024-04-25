import { Component } from '@angular/core';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent {
  menu = [
    { group: 'Insturment', name: 'Summary', route: '/instrument/summary' },
    { group: 'Insturment', name: 'Account', route: '/instrument/account' },
    { group: 'Insturment', name: 'Notes', route: '/instrument/note' },
    { group: 'Insturment', name: 'Events', route: '/instrument/event' },
  ];
}
