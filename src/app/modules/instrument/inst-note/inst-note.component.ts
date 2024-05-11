import { Component } from '@angular/core';

@Component({
  selector: 'app-inst-note',
  templateUrl: './inst-note.component.html',
  styleUrls: ['./inst-note.component.scss']
})
export class InstNoteComponent {
  data = [
    { id: '1', description: 'description description description', user: 'System', timestamp: '01/01/2023' },
    { id: '2', description: 'description description description', user: 'Bob', timestamp: '01/01/2023' },
    { id: '3', description: 'description description description', user: 'Roger', timestamp: '01/01/2023' }
  ];
  headers = [ 'timestamp', 'user', 'description' ];
}
