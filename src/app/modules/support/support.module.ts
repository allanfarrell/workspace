import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';
import { GuidesComponent } from './guides/guides.component';
import { SupportRequestComponent } from './support-request/support-request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    GuidesComponent,
    ReleaseNotesComponent,
    SupportComponent,
    SupportRequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class SupportModule { }