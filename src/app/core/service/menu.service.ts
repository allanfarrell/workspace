import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  private menuItems: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
  public menu$: Observable<MenuItem[]> = this.menuItems.asObservable();

  public updateMenu(items: MenuItem[]): void {
    this.menuItems.next(items);
  }

  public clearMenu(): void {
    this.menuItems.next([]);
  }
}
