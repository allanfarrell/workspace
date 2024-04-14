import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org.component';
import { UsersComponent } from './configuration/users/users.component';
import { DetailsComponent } from './details/details.component';
import { IntegrationComponent } from './configuration/integration/integration.component';

import { ReferenceDataComponent } from './configuration/reference-data/reference-data.component';
import { EventsComponent } from './audit/events/events.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { RolesComponent } from './configuration/roles/roles.component';

import { CommunicationComponent } from './audit/communication/communication.component';
import { ObligorsComponent } from './entities/obligors/obligors.component';
import { FundersComponent } from './entities/funders/funders.component';
import { ProductsComponent } from './entities/products/products.component';

@NgModule({
  declarations: [
    OrgComponent,
    UsersComponent,
    DetailsComponent,
    IntegrationComponent,
    CommunicationComponent,
    EventsComponent,
    ReferenceDataComponent,
    EventsComponent,
    RolesComponent,
    ProductsComponent,
    ObligorsComponent,
    FundersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MatIconModule
  ]
})
export class OrgModule { 
  
}
