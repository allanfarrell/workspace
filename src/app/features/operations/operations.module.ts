import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from './instrument/instrument.component';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { ProductComponent } from './product/product.component';
import { PartyComponent } from './party/party.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InstrumentComponent,
    AccountComponent,
    SecurityComponent,
    ProductComponent,
    PartyComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class OperationsModule { }
