import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  permissionsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  persmissions$: Observable<any> = this.permissionsSubject.asObservable();

  styleSubject: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  style$: Observable<any> = this.styleSubject.asObservable();

  constructor() { }
}
