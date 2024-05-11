import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemAdminComponent } from './system-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TenantsComponent } from './tenants/tenants.component';
import { TenantComponent } from './tenant/tenant.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    SystemAdminComponent,
    TenantsComponent,
    TenantComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class SystemAdminModule { }
