import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  searchQuery: string = '';

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchQuery);
  }
}
