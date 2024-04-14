import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentModule } from './features/instrument/instrument.module';
import { DashboardComponent } from './features/account/dashboard/dashboard.component';
import { SupportComponent } from './features/support/support.component';
import { InstrumentComponent } from './features/instrument/instrument.component';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { OrgComponent } from './features/org/org.component';
import { SettingsComponent } from './features/account/settings/settings.component';
import { AccountComponent } from './features/account/account.component';
import { GuidesComponent } from './features/support/guides/guides.component';
import { ReleaseNotesComponent } from './features/support/release-notes/release-notes.component';
import { SupportRequestComponent } from './features/support/support-request/support-request.component';
import { DetailsComponent } from './features/org/details/details.component';
import { UsersComponent } from './features/org/configuration/users/users.component';
import { ReferenceDataComponent } from './features/org/configuration/reference-data/reference-data.component';

import { IntegrationComponent } from './features/org/configuration/integration/integration.component';
import { NotificationsComponent } from './features/account/notifications/notifications.component';

import { RolesComponent } from './features/org/configuration/roles/roles.component';
import { CommunicationComponent } from './features/org/audit/communication/communication.component';
import { EventsComponent } from './features/org/audit/events/events.component';
import { ObligorsComponent } from './features/org/entities/obligors/obligors.component';
import { FundersComponent } from './features/org/entities/funders/funders.component';
import { SearchComponent } from './features/search/search.component';
import { InstrumentSummaryComponent } from './features/instrument/instrument-summary/instrument-summary.component';
import { InstrumentAssociationComponent } from './features/instrument/instrument-association/instrument-association.component';
import { InstrumentAccountComponent } from './features/instrument/instrument-account/instrument-account.component';
import { InstrumentSecurityComponent } from './features/instrument/instrument-security/instrument-security.component';
import { InstrumentNoteComponent } from './features/instrument/instrument-note/instrument-note.component';
import { InstrumentEventComponent } from './features/instrument/instrument-event/instrument-event.component';
import { ProductsComponent } from './features/org/entities/products/products.component';

export const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "account", component: AccountComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "notifications", component: NotificationsComponent },
    ]
  },
  { path: "org", component: OrgComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: "details", component: DetailsComponent },
      { path: "users", component: UsersComponent },
      { path: "integration", component: IntegrationComponent },
      { path: "communication", component:  CommunicationComponent },
      { path: "roles", component: RolesComponent },
      { path: "reference", component: ReferenceDataComponent },
      { path: "events", component: EventsComponent },
    ]
  },
  { path: "entities", component: OrgComponent,
    children: [
      { path: '', redirectTo: 'funders', pathMatch: 'full' },
      { path: "funders", component: FundersComponent },
      { path: "obligors", component: ObligorsComponent },
      { path: "products", component: ProductsComponent },
    ]
  },
  {
    path: 'support', component: SupportComponent,
    children: [
      { path: '', redirectTo: 'request', pathMatch: 'full' },
      { path: "guides", component: GuidesComponent },
      { path: "release", component: ReleaseNotesComponent },
      { path: "request", component: SupportRequestComponent },
    ]
  },
  {
    path: 'instrument', component: InstrumentComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: "summary", component: InstrumentSummaryComponent },
      { path: "associations", component: InstrumentAssociationComponent },
      { path: "accounts", component: InstrumentAccountComponent },
      { path: "securities", component: InstrumentSecurityComponent },
      { path: "notes", component: InstrumentNoteComponent },
      { path: "events", component: InstrumentEventComponent },
    ]
  },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '**', redirectTo: 'account/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
