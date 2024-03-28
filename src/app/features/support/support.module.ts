import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GuidesComponent } from './guides/guides.component';
import { SupportRequestComponent } from './support-request/support-request.component';



@NgModule({
  declarations: [
    SupportComponent,
    ReleaseNotesComponent,
    GuidesComponent,
    SupportRequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SupportModule { }
