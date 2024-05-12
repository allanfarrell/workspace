import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { AccountLayoutComponent } from './pages/account-layout/account-layout.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    SettingsComponent,
    NotificationsComponent,
    AccountLayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AccountLayoutComponent,
    SettingsComponent,
    NotificationsComponent,
    DashboardComponent
  ]
})
export class AccountModule { }
