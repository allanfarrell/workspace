import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() items: menuItem[] = [];
  @Input() labelKey: string = 'name';
  @Input() placeholder: string = 'placeholder';
  @Output() selectedItemChange = new EventEmitter<menuItem>();
  selectedItem: string = 'Module';
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectItem(item: menuItem) {
    this.selectedItem = item.name;
    this.selectedItemChange.emit(item);
    this.showDropdown = false;
  }
}

export interface menuItem {
  name: string,
  route: string
}
