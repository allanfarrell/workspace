import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search/search.component';
import { DetailsComponent } from './features/account/details/details.component';
import { InstrumentModule } from './features/instrument/instrument.module';
import { InstrumentDetailsComponent } from './features/instrument/instrument-details/instrument-details.component';
import { DashboardComponent } from './features/account/dashboard/dashboard.component';
import { TenantDetailsComponent } from './features/tenant/tenant-details/tenant-details.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { SupportComponent } from './features/support/support.component';
import { PartyComponent } from './features/operations/party/party.component';
import { ProductComponent } from './features/operations/product/product.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "search", component: SearchComponent },
  { path: "account", component: DetailsComponent },
  { path: "tenant", component: TenantDetailsComponent },
  { path: "instrument", component: InstrumentDetailsComponent },
  { path: "party", component: PartyComponent },
  { path: "product", component: ProductComponent },
  { path: "support", component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
