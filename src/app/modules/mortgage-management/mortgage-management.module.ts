import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageManagementComponent } from './mortgage-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SecurityComponent } from './security/security.component';
import { MmObligorComponent } from './mm-obligor/mm-obligor.component';
import { MmSearchComponent } from './mm-search/mm-search.component';
import { MmSecurityComponent } from './mm-security/mm-security.component';
import { MmProductComponent } from './mm-product/mm-product.component';
import { MmTransactionsComponent } from './mm-transactions/mm-transactions.component';
import { MmSummaryComponent } from './mm-summary/mm-summary.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    MortgageManagementComponent,
    SecurityComponent,
    MmObligorComponent,
    MmSearchComponent,
    MmSecurityComponent,
    MmProductComponent,
    MmTransactionsComponent,
    MmSummaryComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterLink,
    MatIconModule,
    AppRoutingModule
  ]
})
export class MortgageManagementModule { }
