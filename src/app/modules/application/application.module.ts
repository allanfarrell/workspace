import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ApplicationLayoutComponent } from './pages/application-layout/application-layout.component';



@NgModule({
  declarations: [
    ApplicationLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class ApplicationModule { }
