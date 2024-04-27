import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  headers = ['Name', 'Roles', 'Created'];
  data = [
    { Id: 1, Name: 'User One', Roles: 'Plumber', Created: '01/01/2023'},
  ];
}
