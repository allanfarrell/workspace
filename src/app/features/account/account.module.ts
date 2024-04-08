import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    NotificationsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccountModule { }
