import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router) {}
  selected: string = 'Item1';
  @Input() menu: Menu = {
    groups: [
      {
        name: 'Instrument',
        items: [
          { name: 'Item1', route: '/somewhere' },
          { name: 'Item2', route: '/somewhere' }
        ]
      }
    ]
  }

  menuItemClick(item: MenuItem) {
    this.router.navigate([item.route]);
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
