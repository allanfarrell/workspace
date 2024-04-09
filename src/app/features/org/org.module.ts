import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { IntegrationComponent } from './integration/integration.component';
import { CommunicationComponent } from './communication/communication.component';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { EventsComponent } from './events/events.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    OrgComponent,
    UsersComponent,
    DetailsComponent,
    IntegrationComponent,
    CommunicationComponent,
    ReferenceDataComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OrgModule { 
  
}
