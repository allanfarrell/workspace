import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  selectedGroup: string = '';
  selectedItem: string = '';
  constructor(private router: Router) {
    this.selectedGroup = this.menu.groups[0].name;
    this.selectedItem = this.menu.groups[0].items[0].name;
  }
  selected: string = 'Item1';
  @Input() menu: Menu = {
    groups: [
      {
        name: 'Instrument',
        items: [
          { name: 'Item1', route: '/somewhere' }
        ]
      }
    ]
  }

  menuItemClick(item: MenuItem) {
    if(item.name !== this.selectedItem) {
      this.selectedItem = item.name;
      this.router.navigate([item.route]);
    }
  }

  toggleGroup(group: MenuGroup) {
    if(this.selectedGroup == group.name ){
      this.selectedGroup = '';
    } else {
      this.selectedGroup = group.name;
    }
  }
}

interface Menu {
  groups: MenuGroup[];
}

interface MenuGroup {
  name: string;
  items: MenuItem[];
}

interface MenuItem {
  name: string;
  route: string;
}
