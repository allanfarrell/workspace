import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentDetailsComponent } from './instrument-details/instrument-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountDetailsComponent } from './account-details/account-details.component';



@NgModule({
  declarations: [
    InstrumentDetailsComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InstrumentModule { }
