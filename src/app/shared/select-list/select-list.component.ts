import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent {
  @Input() items: string[] = [];
  @Input() placeholder: string = 'placeholder';
  @Output() selectedItemChange = new EventEmitter<string>();
  selectedItem: string = 'Module';
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.selectedItemChange.emit(item);
    this.showDropdown = false;
  }
}
