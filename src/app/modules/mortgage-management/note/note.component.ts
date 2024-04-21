import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  data = [
    { id: '1', created: '01/01/2000 hh:mm:ss', user: 'System', note: 'Event 1', action: '' },
    { id: '1', created: '01/01/2000 hh:mm:ss', user: 'System', note: 'Event 2', action: '' },
    { id: '1', created: '01/01/2000 hh:mm:ss', user: 'System', note: 'Event 3', action: '' },
  ];
  headers = [ 'id', 'created', 'user', 'note', 'action' ];
}
