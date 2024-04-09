import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { MatIconModule } from '@angular/material/icon';
import { AccountModule } from './features/account/account.module';
import { InstrumentModule } from './features/instrument/instrument.module';
import { TenantDetailsComponent } from './features/tenant/tenant-details/tenant-details.component';
import { NotificationsModule } from './features/notifications/notifications.module';
import { SupportModule } from './features/support/support.module';
import { UsersComponent } from './features/tenant/users/users.component';
import { GroupsComponent } from './features/tenant/groups/groups.component';
import { IntegrationsComponent } from './features/tenant/integrations/integrations.component';
import { CommunicationComponent } from './features/tenant/communication/communication.component';
import { ReferenceDataComponent } from './features/tenant/reference-data/reference-data.component';
import { ProductsComponent } from './features/tenant/products/products.component';
import { OperationsModule } from './features/operations/operations.module';
import { OrgModule } from './features/org/org.module';
import { AnalyticsModule } from './features/analytics/analytics.module';

@NgModule({
  declarations: [
    AppComponent,
    TenantDetailsComponent,
    UsersComponent,
    GroupsComponent,
    IntegrationsComponent,
    CommunicationComponent,
    ReferenceDataComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    NotificationsModule,
    AccountModule,
    InstrumentModule,
    OrgModule,
    AnalyticsModule,
    OperationsModule,
    SupportModule,
    SharedModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
