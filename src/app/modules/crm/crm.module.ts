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
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class CrmModule { }
