import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menu: Menu = {
    groups: [
      {
        name: 'Instrument',
        items: [
          {
            name: 'Item1',
            route: '/somewhere'
          },
          {
            name: 'Item2',
            route: '/somewhere'
          }
        ]
      },
      {
        name: 'Group2',
        items: []
      }
    ]
  }

  menuItemClick(item: MenuItem) {
    console.log(item);
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
