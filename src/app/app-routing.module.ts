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

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "search", component: SearchComponent },
  { path: "account", component: SettingsComponent },
  { path: "tenant", component: OrgComponent },
  { path: "instrument", component: InstrumentComponent },
  { path: "analytics", component: AnalyticsComponent },
  { path: "party", component: PartyComponent },
  { path: "product", component: ProductComponent },
  { path: "support", component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
