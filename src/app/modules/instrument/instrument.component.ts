import { Component } from '@angular/core';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent {
  menu = [
    { group: '', name: 'Back', route: '/manage/search' },
    { group: 'Insturment', name: 'Summary', route: '/instrument/summary' },
    { group: 'Insturment', name: 'Variations', route: '/instrument/variation' },
    { group: 'Insturment', name: 'Documents', route: '/instrument/document' },
    { group: 'Insturment', name: 'Communication', route: '/instrument/communication' },
    { group: 'Insturment', name: 'Attributes', route: '/instrument/attribute' },
    { group: 'Insturment', name: 'Notes', route: '/instrument/note' },
    { group: 'Insturment', name: 'Events', route: '/instrument/event' },
    { group: 'Insturment', name: 'Insurance', route: '/instrument/event' },
    { group: 'Insturment', name: 'Collections', route: '/instrument/event' },
  ];
}
