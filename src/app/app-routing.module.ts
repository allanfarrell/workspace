import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from './modules/support/pages/guides/guides.component';
import { ReleaseNotesComponent } from './modules/support/pages/release-notes/release-notes.component';
import { SupportRequestComponent } from './modules/support/pages/support-request/support-request.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { InstSummaryComponent } from './modules/instrument/pages/inst-summary/inst-summary.component';
import { InstNoteComponent } from './modules/instrument/pages/inst-note/inst-note.component';
import { InstEventComponent } from './modules/instrument/pages/inst-event/inst-event.component';
import { InstAccountComponent } from './modules/instrument/pages/inst-account/inst-account.component';
import { AssessmentComponent } from './modules/assessment/assessment.component';
import { AssessQueueComponent } from './modules/assessment/assess-queue/assess-queue.component';
import { InstSecurityComponent } from './modules/instrument/pages/inst-security/inst-security.component';
import { InstVariationComponent } from './modules/instrument/pages/inst-variation/inst-variation.component';
import { InstDocumentComponent } from './modules/instrument/pages/inst-document/inst-document.component';
import { MmSearchComponent } from './modules/mortgage-management/pages/mm-search/mm-search.component';
import { InstCommunicationComponent } from './modules/instrument/pages/inst-communication/inst-communication.component';
import { MmTransactionsComponent } from './modules/mortgage-management/pages/mm-transactions/mm-transactions.component';
import { SystemAdminComponent } from './modules/system-admin/system-admin.component';
import { TenantsComponent } from './modules/system-admin/tenants/tenants.component';
import { MmProductComponent } from './modules/mortgage-management/pages/mm-product/mm-product.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { InstAttributesComponent } from './modules/instrument/pages/inst-attributes/inst-attributes.component';
import { ConfigureComponent } from './modules/configure/pages/configure/configure.component';
import { RolesComponent } from './modules/configure/pages/roles/roles.component';
import { TokenComponent } from './modules/configure/pages/token/token.component';
import { BrandComponent } from './modules/configure/pages/brand/brand.component';
import { UsersComponent } from './modules/configure/pages/users/users.component';
import { EmailComponent } from './modules/configure/pages/email/email.component';
import { SmsComponent } from './modules/configure/pages/sms/sms.component';
import { RefDataComponent } from './modules/configure/pages/ref-data/ref-data.component';
import { SettingsComponent } from './modules/account/pages/settings/settings.component';
import { NotificationsComponent } from './modules/account/pages/notifications/notifications.component';
import { DashboardComponent } from './modules/account/pages/dashboard/dashboard.component';
import { AccountLayoutComponent } from './modules/account/pages/account-layout/account-layout.component';
import { MmLayoutComponent } from './modules/mortgage-management/pages/mm-layout/mm-layout.component';
import { SupportLayoutComponent } from './modules/support/pages/support-layout/support-layout.component';
import { InstrumentLayoutComponent } from './modules/instrument/pages/instrument-layout/instrument-layout.component';
import { AssociateComponent } from './modules/configure/pages/associate/associate.component';
import { DetailsComponent } from './modules/configure/pages/details/details.component';
import { ApplicationLayoutComponent } from './modules/application/pages/application-layout/application-layout.component';
import { AppSearchComponent } from './modules/application/pages/app-search/app-search.component';

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "account", component: AccountLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "notifications", component: NotificationsComponent },
    ]
  },
  { path: "application", component: ApplicationLayoutComponent,
  children: [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: "search", component: AppSearchComponent },
  ]
},
  { path: "manage", component: MmLayoutComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: "search", component: MmSearchComponent },
      { path: "product", component: MmProductComponent },
      { path: "transactions", component: MmTransactionsComponent },
    ]
  },
  { path: "shd", component: MmLayoutComponent,
    children: [
      { path: '', redirectTo: 'transactions', pathMatch: 'full' },
      { path: "transactions", component: MmTransactionsComponent },
      { path: "communication", component: MmTransactionsComponent },
    ]
  },
  { path: "assessment", component: AssessmentComponent,
    children: [
      { path: '', redirectTo: 'queue', pathMatch: 'full' },
      { path: "queue", component: AssessQueueComponent },
    ]
  },
  { path: "instrument", component: InstrumentLayoutComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: "summary", component: InstSummaryComponent },
      { path: "account", component: InstAccountComponent },
      { path: "note", component: InstNoteComponent },
      { path: "event", component: InstEventComponent },
      { path: "security", component: InstSecurityComponent },
      { path: "communication", component: InstCommunicationComponent },
      { path: "attribute", component: InstAttributesComponent },
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
    path: 'support', component: SupportLayoutComponent,
    children: [
      { path: '', redirectTo: 'request', pathMatch: 'full' },
      { path: "guides", component: GuidesComponent },
      { path: "release", component: ReleaseNotesComponent },
      { path: "request", component: SupportRequestComponent },
    ]
  },
  {
    path: 'config', component: ConfigureComponent,
    children: [
      { path: '', redirectTo: 'brand', pathMatch: 'full' },
      { path: 'associate', component: AssociateComponent },
      { path: 'detail', component: DetailsComponent },
      { path: 'brand', component: BrandComponent },
      { path: "user", component: UsersComponent },
      { path: "role", component: RolesComponent },
      { path: "token", component: TokenComponent },
      { path: "email", component: EmailComponent },
      { path: "sms", component: SmsComponent },
      { path: "reference", component: RefDataComponent },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
