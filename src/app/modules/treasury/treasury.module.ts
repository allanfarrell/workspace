import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreasuryLayoutComponent } from './page/treasury-layout/treasury-layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

@NgModule({
  declarations: [
    TreasuryLayoutComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class TreasuryModule { }
