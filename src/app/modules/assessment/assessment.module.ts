import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AssessQueueComponent } from './page/assess-queue/assess-queue.component';
import { CoreModule } from 'src/app/core/core.module';
import { AssSummaryComponent } from './page/ass-summary/ass-summary.component';



@NgModule({
  declarations: [
    AssessmentComponent,
    AssessQueueComponent,
    AssSummaryComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class AssessmentModule { }
