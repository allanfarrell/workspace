import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from './instrument.component';
import { InstNoteComponent } from './inst-note/inst-note.component';
import { InstEventComponent } from './inst-event/inst-event.component';
import { InstSummaryComponent } from './inst-summary/inst-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterLink } from '@angular/router';
import { InstAccountComponent } from './inst-account/inst-account.component';



@NgModule({
  declarations: [
    InstrumentComponent,
    InstNoteComponent,
    InstEventComponent,
    InstSummaryComponent,
    InstAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterLink
  ]
})
export class InstrumentModule { }
