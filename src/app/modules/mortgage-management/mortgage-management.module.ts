import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MmObligorComponent } from './pages/mm-obligor/mm-obligor.component';
import { MmSearchComponent } from './pages/mm-search/mm-search.component';
import { MmProductComponent } from './pages/mm-product/mm-product.component';
import { MmTransactionsComponent } from './pages/mm-transactions/mm-transactions.component';
import { CoreModule } from 'src/app/core/core.module';
import { MmLayoutComponent } from './pages/mm-layout/mm-layout.component';

@NgModule({
  declarations: [
    MmObligorComponent,
    MmSearchComponent,
    MmProductComponent,
    MmTransactionsComponent,
    MmLayoutComponent,
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
