import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() clickable: boolean = false;
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  rowClicked(row: any) {
    this.clickEvent.emit(row);
  }
}
