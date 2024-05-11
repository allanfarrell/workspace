import { Component, Input } from '@angular/core';
import { MenuGroup, MenuItem } from '../../service/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ubx-menu',
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
    const selectedMenuItem = this.preSelectMenuItem(this.router.url);
    if (selectedMenuItem) {
      this.selectedGroup = selectedMenuItem.group;
      this.selectedItem = selectedMenuItem.name;
    }
    this.menu2 = this.createMenu();
  }

  menuItemClick(item: MenuItem) {
    if(item.name !== this.selectedItem) {
      this.selectedItem = item.name;
      this.selectedGroup = item.group;
      this.selectedMenuItem = item;
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
    return this.menu.find(item => currentUrl.includes(item.route));
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
