import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountComponent } from './account.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent,
    SettingsComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class AccountModule { }
