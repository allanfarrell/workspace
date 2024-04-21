import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageManagementComponent } from './mortgage-management.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccountComponent } from './account/account.component';
import { AssociationComponent } from './association/association.component';
import { EventComponent } from './event/event.component';
import { NoteComponent } from './note/note.component';
import { SecurityComponent } from './security/security.component';
import { ObligorComponent } from './obligor/obligor.component';
import { InstrumentComponent } from './instrument/instrument.component';

@NgModule({
  declarations: [
    MortgageManagementComponent,
    InstrumentComponent,
    SearchComponent,
    AccountComponent,
    AssociationComponent,
    EventComponent,
    NoteComponent,
    SecurityComponent,
    ObligorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    MatIconModule,
    AppRoutingModule
  ]
})
export class MortgageManagementModule { }
