import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AnalyticsModule { }
