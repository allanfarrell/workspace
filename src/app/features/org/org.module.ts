import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    OrgComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrgModule { }
