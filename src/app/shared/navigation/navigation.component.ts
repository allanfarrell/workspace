import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItem } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuName: string = 'Modules';
  modules: menuItem[] = [
    { name: 'Application', route: '/application/search' },
    { name: 'Assessment', route: '/assessment/queue' },
    { name: 'Management', route: '/manage/search' },
    { name: 'Treasury', route: '/treasury/portfolio' },
  ];
  constructor(private router: Router) {}

  navigate(item: menuItem){
    console.log(item.route);
    this.router.navigate([item.route]);
  }
}
