import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search/search.component';
import { InstrumentModule } from './features/instrument/instrument.module';
import { DashboardComponent } from './features/account/dashboard/dashboard.component';
import { TenantDetailsComponent } from './features/tenant/tenant-details/tenant-details.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { SupportComponent } from './features/support/support.component';
import { PartyComponent } from './features/operations/party/party.component';
import { ProductComponent } from './features/operations/product/product.component';
import { InstrumentComponent } from './features/instrument/instrument.component';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { OrgComponent } from './features/org/org.component';
import { SettingsComponent } from './features/account/settings/settings.component';
import { CommunicationComponent } from './features/tenant/communication/communication.component';
import { AccountComponent } from './features/account/account.component';
import { GuidesComponent } from './features/support/guides/guides.component';

export const routes: Routes = [
  { path: "account", component: AccountComponent,
    children: [
      { path: 'account', redirectTo: 'account/dashboard', pathMatch: 'full' },
      { path: "account/dashboard", component: DashboardComponent },
      { path: "account/settings", component: SettingsComponent }
    ]
  },
  { path: "org", component: OrgComponent,
    children: [
      { path: "org/communication", component: CommunicationComponent }
    ]
  },
  {
    path: 'support', component: SupportComponent,
    children: [
      { path: 'support', redirectTo: 'support/guides', pathMatch: 'full' },
      { path: 'support/guides', component: GuidesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
