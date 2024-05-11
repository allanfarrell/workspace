import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmComponent } from './crm.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommunicationComponent } from './organisation/audit/communication/communication.component';
import { EventsComponent } from './organisation/audit/events/events.component';
import { IntegrationComponent } from './organisation/configuration/integration/integration.component';
import { ReferenceDataComponent } from './organisation/configuration/reference-data/reference-data.component';
import { RolesComponent } from './organisation/configuration/roles/roles.component';
import { UsersComponent } from './organisation/configuration/users/users.component';
import { FundersComponent } from './organisation/entities/funders/funders.component';
import { ObligorsComponent } from './organisation/entities/obligors/obligors.component';
import { ProductsComponent } from './organisation/entities/products/products.component';
import { Router, RouterModule } from '@angular/router';
import { IntSmsComponent } from './organisation/configuration/integration/int-sms/int-sms.component';
import { IntEmailComponent } from './organisation/configuration/integration/int-email/int-email.component';
import { CoreModule } from 'src/app/core/core.module';
import { BrandComponent } from './organisation/configuration/brand/brand.component';
import { TenantComponent } from './organisation/configuration/tenant/tenant.component';

@NgModule({
  declarations: [
    CrmComponent,
    CommunicationComponent,
    EventsComponent,
    IntegrationComponent,
    ReferenceDataComponent,
    RolesComponent,
    UsersComponent,
    FundersComponent,
    ObligorsComponent,
    ProductsComponent,
    IntSmsComponent,
    IntEmailComponent,
    BrandComponent,
    TenantComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule
  ]
})
export class CrmModule { }
