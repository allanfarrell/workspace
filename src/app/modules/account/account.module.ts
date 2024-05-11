import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent,
    SettingsComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class AccountModule { }
