import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { AccountModule } from './features/account/account.module';
import { InstrumentModule } from './features/instrument/instrument.module';
import { SupportModule } from './features/support/support.module';
import { OrgModule } from './features/org/org.module';
import { AnalyticsModule } from './features/analytics/analytics.module';
import { SearchModule } from './features/search/search.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    AccountModule,
    InstrumentModule,
    OrgModule,
    AnalyticsModule,
    SupportModule,
    SharedModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
