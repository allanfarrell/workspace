import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/account/dashboard/dashboard.component';
import { SupportComponent } from './modules/support/support.component';
import { SettingsComponent } from './modules/account/settings/settings.component';
import { AccountComponent } from './modules/account/account.component';
import { GuidesComponent } from './modules/support/guides/guides.component';
import { ReleaseNotesComponent } from './modules/support/release-notes/release-notes.component';
import { SupportRequestComponent } from './modules/support/support-request/support-request.component';
import { NotificationsComponent } from './modules/account/notifications/notifications.component';
import { SearchComponent } from './modules/mortgage-management/search/search.component';
import { CrmModule } from './modules/crm/crm.module';
import { UsersComponent } from './modules/crm/organisation/configuration/users/users.component';
import { IntegrationComponent } from './modules/crm/organisation/configuration/integration/integration.component';
import { CommunicationComponent } from './modules/crm/organisation/audit/communication/communication.component';
import { RolesComponent } from './modules/crm/organisation/configuration/roles/roles.component';
import { ReferenceDataComponent } from './modules/crm/organisation/configuration/reference-data/reference-data.component';
import { EventsComponent } from './modules/crm/organisation/audit/events/events.component';
import { CrmComponent } from './modules/crm/crm.component';
import { FundersComponent } from './modules/crm/organisation/entities/funders/funders.component';
import { ObligorsComponent } from './modules/crm/organisation/entities/obligors/obligors.component';
import { ProductsComponent } from './modules/crm/organisation/entities/products/products.component';
import { MortgageManagementComponent } from './modules/mortgage-management/mortgage-management.component';
import { InstrumentComponent } from './modules/mortgage-management/instrument/instrument.component';
import { AssociationComponent } from './modules/mortgage-management/association/association.component';
import { SecurityComponent } from './modules/mortgage-management/security/security.component';
import { NoteComponent } from './modules/mortgage-management/note/note.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: "account", component: AccountComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "notifications", component: NotificationsComponent },
    ]
  },
  { path: "org", component: CrmComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: "users", component: UsersComponent },
      { path: "integration", component: IntegrationComponent },
      { path: "communication", component:  CommunicationComponent },
      { path: "roles", component: RolesComponent },
      { path: "reference", component: ReferenceDataComponent },
      { path: "events", component: EventsComponent },
    ]
  },
  { path: "entities", component: CrmComponent,
    children: [
      { path: '', redirectTo: 'funders', pathMatch: 'full' },
      { path: "funders", component: FundersComponent },
      { path: "obligors", component: ObligorsComponent },
      { path: "products", component: ProductsComponent },
    ]
  },
  { path: "mgr", component: MortgageManagementComponent,
  children: [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: "search", component: SearchComponent },
    { path: "instrument", component: InstrumentComponent },
    { path: "obligor", component: ObligorsComponent },
    { path: "summary", component: InstrumentComponent },
    { path: "association", component: AssociationComponent },
    { path: "account", component: AccountComponent },
    { path: "security", component: SecurityComponent },
    { path: "note", component: NoteComponent },
    { path: "event", component: EventsComponent },
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
  { path: '**', component: NotFoundComponent },
  { path: '**', redirectTo: '/account/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
