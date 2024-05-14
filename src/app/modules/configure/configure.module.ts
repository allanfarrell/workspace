import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigureComponent } from './pages/configure/configure.component';
import { BrandComponent } from './pages/brand/brand.component';
import { UsersComponent } from './pages/users/users.component';
import { RefDataComponent } from './pages/ref-data/ref-data.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EmailComponent } from './pages/email/email.component';
import { SmsComponent } from './pages/sms/sms.component';
import { RolesComponent } from './pages/roles/roles.component';
import { TokenComponent } from './pages/token/token.component';
import { AssociateComponent } from './pages/associate/associate.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    ConfigureComponent,
    BrandComponent,
    UsersComponent,
    RefDataComponent,
    EmailComponent,
    SmsComponent,
    RolesComponent,
    TokenComponent,
    AssociateComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    ConfigureComponent,
    BrandComponent,
    UsersComponent,
    RefDataComponent,
    EmailComponent,
    SmsComponent,
    RolesComponent,
    TokenComponent,
    AssociateComponent,
    DetailsComponent
  ]
})
export class ConfigureModule { }
