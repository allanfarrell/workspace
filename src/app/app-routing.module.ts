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
import { SecurityComponent } from './modules/mortgage-management/security/security.component';

import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { InstSummaryComponent } from './modules/instrument/inst-summary/inst-summary.component';
import { InstNoteComponent } from './modules/instrument/inst-note/inst-note.component';
import { InstEventComponent } from './modules/instrument/inst-event/inst-event.component';
import { InstrumentComponent } from './modules/instrument/instrument.component';
import { InstAccountComponent } from './modules/instrument/inst-account/inst-account.component';
import { AssessmentComponent } from './modules/assessment/assessment.component';
import { AssessQueueComponent } from './modules/assessment/assess-queue/assess-queue.component';
import { InstTransactionComponent } from './modules/instrument/inst-transaction/inst-transaction.component';
import { InstSecurityComponent } from './modules/instrument/inst-security/inst-security.component';
import { InstVariationComponent } from './modules/instrument/inst-variation/inst-variation.component';
import { InstDocumentComponent } from './modules/instrument/inst-document/inst-document.component';
import { MmSearchComponent } from './modules/mortgage-management/mm-search/mm-search.component';
import { InstCommunicationComponent } from './modules/instrument/inst-communication/inst-communication.component';
import { MmTransactionsComponent } from './modules/mortgage-management/mm-transactions/mm-transactions.component';
import { IntEmailComponent } from './modules/crm/organisation/configuration/integration/int-email/int-email.component';
import { IntSmsComponent } from './modules/crm/organisation/configuration/integration/int-sms/int-sms.component';
import { SystemAdminComponent } from './modules/system-admin/system-admin.component';
import { TenantsComponent } from './modules/system-admin/tenants/tenants.component';

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
      { path: "integration/email", component: IntEmailComponent },
      { path: "integration/sms", component: IntSmsComponent },
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
      { path: "search", component: MmSearchComponent },
      { path: "obligor", component: ObligorsComponent },
      { path: "account", component: AccountComponent },
      { path: "security", component: SecurityComponent },
      { path: "transactions", component: MmTransactionsComponent },
    ]
  },
  { path: "assessment", component: AssessmentComponent,
    children: [
      { path: '', redirectTo: 'queue', pathMatch: 'full' },
      { path: "queue", component: AssessQueueComponent },
    ]
  },
  { path: "instrument", component: InstrumentComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: "summary", component: InstSummaryComponent },
      { path: "account", component: InstAccountComponent },
      { path: "note", component: InstNoteComponent },
      { path: "event", component: InstEventComponent },
      { path: "security", component: InstSecurityComponent },
      { path: "communication", component: InstCommunicationComponent },
      { path: "variation", component: InstVariationComponent },
      { path: "document", component: InstDocumentComponent },
    ]
  },
  {
    path: 'sys', component: SystemAdminComponent,
    children: [
      { path: '', redirectTo: 'tenants', pathMatch: 'full' },
      { path: 'tenants', component: TenantsComponent }
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
  { path: '', redirectTo: 'account/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
