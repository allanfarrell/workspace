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
import { CrmModule } from './modules/crm/crm.module';
import { InstrumentModule } from './modules/instrument/instrument.module';
import { AssessmentModule } from './modules/assessment/assessment.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    CrmModule,
    MortgageManagementModule,
    SupportModule,
    SharedModule,
    MatIconModule,
    InstrumentModule,
    AssessmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
