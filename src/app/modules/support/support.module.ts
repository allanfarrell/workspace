import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseNotesComponent } from './pages/release-notes/release-notes.component';
import { GuidesComponent } from './pages/guides/guides.component';
import { SupportRequestComponent } from './pages/support-request/support-request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SupportLayoutComponent } from './pages/support-layout/support-layout.component';

@NgModule({
  declarations: [
    GuidesComponent,
    ReleaseNotesComponent,
    SupportRequestComponent,
    SupportLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class SupportModule { }