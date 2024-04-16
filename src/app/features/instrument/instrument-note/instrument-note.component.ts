import { Component } from '@angular/core';

@Component({
  selector: 'app-instrument-note',
  templateUrl: './instrument-note.component.html',
  styleUrls: ['./instrument-note.component.scss']
})
export class InstrumentNoteComponent {
  data = [
    { id: '1', created: '01/01/2000 hh:mm:ss', user: 'System', note: 'Event 1', action: '' },
    { id: '1', created: '01/01/2000 hh:mm:ss', user: 'System', note: 'Event 2', action: '' },
    { id: '1', created: '01/01/2000 hh:mm:ss', user: 'System', note: 'Event 3', action: '' },
  ];
  headers = [ 'id', 'created', 'user', 'note', 'action' ];
}
