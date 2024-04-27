import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AssessQueueComponent } from './assess-queue/assess-queue.component';



@NgModule({
  declarations: [
    AssessmentComponent,
    AssessQueueComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class AssessmentModule { }
