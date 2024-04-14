import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstrumentSecurityComponent } from './instrument-security/instrument-security.component';
import { InstrumentSummaryComponent } from './instrument-summary/instrument-summary.component';
import { InstrumentAssociationComponent } from './instrument-association/instrument-association.component';
import { InstrumentNoteComponent } from './instrument-note/instrument-note.component';
import { InstrumentComponent } from './instrument.component';
import { InstrumentEventComponent } from './instrument-event/instrument-event.component';
import { InstrumentAccountComponent } from './instrument-account/instrument-account.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InstrumentSecurityComponent,
    InstrumentSummaryComponent,
    InstrumentAssociationComponent,
    InstrumentNoteComponent,
    InstrumentComponent,
    InstrumentEventComponent,
    InstrumentAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class InstrumentModule { }
