import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmComponent } from './crm.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { IntegrationComponent } from './organisation/configuration/integration/integration.component';

import { FundersComponent } from './organisation/entities/funders/funders.component';
import { ObligorsComponent } from './organisation/entities/obligors/obligors.component';
import { ProductsComponent } from './organisation/entities/products/products.component';
import { Router, RouterModule } from '@angular/router';

import { CoreModule } from 'src/app/core/core.module';
import { TenantComponent } from './organisation/configuration/tenant/tenant.component';

@NgModule({
  declarations: [
    CrmComponent,
    IntegrationComponent,  
    FundersComponent,
    ObligorsComponent,
    ProductsComponent,
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
