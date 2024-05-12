import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstNoteComponent } from './pages/inst-note/inst-note.component';
import { InstEventComponent } from './pages/inst-event/inst-event.component';
import { InstSummaryComponent } from './pages/inst-summary/inst-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterLink } from '@angular/router';
import { InstAccountComponent } from './pages/inst-account/inst-account.component';
import { InstSecurityComponent } from './pages/inst-security/inst-security.component';
import { InstVariationComponent } from './pages/inst-variation/inst-variation.component';
import { InstDocumentComponent } from './pages/inst-document/inst-document.component';
import { InstCommunicationComponent } from './pages/inst-communication/inst-communication.component';
import { CoreModule } from 'src/app/core/core.module';
import { InstAttributesComponent } from './pages/inst-attributes/inst-attributes.component';
import { InstrumentLayoutComponent } from './pages/instrument-layout/instrument-layout.component';

@NgModule({
  declarations: [
    InstNoteComponent,
    InstEventComponent,
    InstSummaryComponent,
    InstAccountComponent,
    InstSecurityComponent,
    InstVariationComponent,
    InstDocumentComponent,
    InstCommunicationComponent,
    InstAttributesComponent,
    InstrumentLayoutComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    RouterLink
  ]
})
export class InstrumentModule { }
