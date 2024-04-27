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
    { group: 'Insturment', name: 'Statements', route: '/instrument/event' },
    { group: 'Insturment', name: 'Security', route: '/instrument/security' },
    { group: 'Insturment', name: 'Transaction', route: '/instrument/transaction' },
    { group: 'Insturment', name: 'Variation', route: '/instrument/variation' },
    { group: 'Insturment', name: 'Documents', route: '/instrument/document' },
    { group: 'Insturment', name: 'Notes', route: '/instrument/note' },
    { group: 'Insturment', name: 'Events', route: '/instrument/event' },
  ];
}
