import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() items: string[] = [ 'item 1', 'item2'];
  searchText: string = '';
  selectedItems: string[] = [];

  constructor() { }

  selectItem(item: string) {
    if (!this.selectedItems.includes(item)) {
      this.selectedItems.push(item);
    }
    this.searchText = '';
  }

  removeItem(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }
  }
}
