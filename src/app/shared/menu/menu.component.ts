import { group } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menu: MenuItem[] = [];
  menu2: MenuGroup[] = [];
  selectedGroup: string = '';
  selectedItem: string | undefined = '';
  selectedMenuItem: MenuItem | undefined = undefined;
  constructor(private router: Router) { }

  ngOnInit() {
    this.preSelectMenuItem(this.router.url);
    this.selectedGroup = this.selectedMenuItem?.group ?? '';
    this.selectedItem = this.selectedMenuItem?.name ?? '';
    this.menu2 = this.createMenu();
  }

  menuItemClick(item: MenuItem) {
    if(item.name !== this.selectedItem) {
      this.selectedItem = item.name;
      this.router.navigate([item.route]);
    }
  }

  toggleGroup(groupName: string) {
    if(this.selectedGroup == groupName){
      this.selectedGroup = '';
    } else {
      this.selectedGroup = groupName;
    }
  }

  preSelectMenuItem(currentUrl: string) {
    this.selectedMenuItem = this.menu.find(item => currentUrl.includes(item.route)) || undefined;
  }

  createMenu(): MenuGroup[] {
    const groupedItems: { [key: string]: MenuItem[] } = {};

    this.menu.forEach(item => {
      if (!groupedItems[item.group]) {
        groupedItems[item.group] = [];
      }
      groupedItems[item.group].push(item);
    });

    const menuGroups: MenuGroup[] = Object.entries(groupedItems).map(([groupName, items]) => ({
      name: groupName,
      items: items
    }));

    return menuGroups;
  }
}

interface MenuItem {
  name: string;
  group: string;
  route: string;
}

interface MenuGroup {
  name: string,
  items: MenuItem[]
}