import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { AccountModule } from './modules/account/account.module';
import { SupportModule } from './modules/support/support.module';
import { MortgageManagementModule } from './modules/mortgage-management/mortgage-management.module';
import { CoreModule } from './core/core.module';
import { InstrumentModule } from './modules/instrument/instrument.module';
import { AssessmentModule } from './modules/assessment/assessment.module';
import { SystemAdminModule } from './modules/system-admin/system-admin.module';
import { ConfigureModule } from './modules/configure/configure.module';
import { ApplicationModule } from './modules/application/application.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    MortgageManagementModule,
    SupportModule,
    SharedModule,
    MatIconModule,
    InstrumentModule,
    AssessmentModule,
    SystemAdminModule,
    ConfigureModule,
    ApplicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
