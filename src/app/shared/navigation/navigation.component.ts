import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItem } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuName: string = 'Module';
  modules: menuItem[] = [
    //{ name: 'Application', route: '/account/dashboard' },
    { name: 'Assessment', route: '/assessment/queue' },
    { name: 'Mortgage Management', route: '/fim/search' },
    //{ name: 'Treasury', route: '/account/dashboard' },
    //{ name: 'Securitisation', route: '/account/dashboard' },
    { name: 'System Admin', route: '/sys/tenants' },
  ];
  constructor(private router: Router) {}

  navigate(item: menuItem){
    console.log(item.route);
    this.router.navigate([item.route]);
  }
}
